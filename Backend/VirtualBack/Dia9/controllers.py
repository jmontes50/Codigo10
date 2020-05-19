from bd import mysql, app
from flask_restful import Resource, Api, reqparse
import bcrypt
api = Api(app)


class Usuario(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        # Un parser es un filtro para que la informacion que nos llegue mediante el body sea la correcta y si no, automaticamente devuelve un mensaje de error
        parser.add_argument('correo', type=str,
                            required=True, help='Falta el correo')
        parser.add_argument('password', type=str,
                            required=True, help='Falta la password')
        parser.add_argument('tipo', type=int, required=True,
                            help='Falta el tipo')
        parser.add_argument('nombre', type=str,
                            required=True, help='Falta el nombre')
        parser.add_argument('apellido', type=str,
                            required=True, help='Falta los apellidos')
        data = parser.parse_args()
        # ENCRIPTACION DE LA CONTRASEÑA
        # print(data)
        password = bytes(data['password'], 'utf-8')
        print(password)
        salt = bcrypt.gensalt(rounds=10)
        hashed = bcrypt.hashpw(password, salt)
        # print(salt,hashed)
        # PRIMER FORMA usando una variable extra
        # saltstr = salt.decode('utf-8')
        # hashedstr = hashed.decode('utf-8')
        # SEGUNDA FORMA mas ligera
        salt = salt.decode('utf-8')
        hashed = hashed.decode('utf-8')

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO T_USUARIO (USU_EMAIL, USU_HASH, USU_SALT, USU_TIPO, USU_NOMBRE, USU_APELLIDO) VALUES (%s,%s,%s,%s,%s,%s)",
                    (data['correo'], hashed, salt, data['tipo'], data['nombre'], data['apellido']))
        mysql.connection.commit()
        cur.close()
        return {'message': 'Usuario creado exitosamente'}, 201


# TRAER TODOS LOS CLIENTES Y TRAER UN SOLO CLIENTE POR SU CORREO Y AGREGAR UN CLIENTE NUEVO
class Cliente(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'nombre',
            type=str,
            required=True,
            help='Falta el nombre'
        )
        parser.add_argument(
            'apellido',
            type=str,
            required=True,
            help='Falta el apellido'
        )
        parser.add_argument(
            'correo',
            type=str,
            required=True,
            help='Falta el correo'
        )
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO T_CLIENTE (cliente_nom, cliente_ape, cliente_email) values (%s,%s,%s)",
                    (data['nombre'], data['apellido'], data['correo']))
        mysql.connection.commit()
        cur.close()
        return {
            'message': 'Cliente creado exitosamente'
        }, 201

    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM T_CLIENTE")
        respuesta = cur.fetchall()
        cur.close()
        respuestaMejorada = []
        for cliente in respuesta:
            diccionariocliente = {
                'id': cliente[0],
                'nombre': cliente[1],
                'apellido': cliente[2],
                'correo': cliente[3]
            }
            respuestaMejorada.append(diccionariocliente)
            print(cliente)
        # print(respuesta)
        return {
            # 'respuesta': respuesta,
            'ok':True,
            'content': respuestaMejorada
        }

    def options(self, correo):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM T_CLIENTE WHERE CLIENTE_EMAIL=%s", (correo,))
        respuesta = cur.fetchone()
        # cur.close()
        # SI EXISTE EL USUARIO QUE ME LO MUESTRE Y SI NO QUE INDIQUE QUE NO EXISTE ESE USUARIO CON ESE CORREO
        if respuesta:
            cur.execute("SELECT * from T_VEHICULO WHERE CLIENTE_ID = %s",(respuesta[0],))
            vehiculos = cur.fetchall()
            listVehiculos = []
            for vehiculo in vehiculos:
                listVehiculos.append({
                    'id':vehiculo[0],
                    'placa':vehiculo[1],
                    'marca':vehiculo[3],
                    'modelo':vehiculo[2],
                    'color':vehiculo[4]
                })
            # MOSTRAR TODOS LOS VEHICULOS DE UN CLIENTE
            clienteDiccionario = {
                'id': respuesta[0],
                'nombre': respuesta[1],
                'apellido': respuesta[2],
                'correo': respuesta[3],
                'vehiculos':listVehiculos
            }
            return {
                'ok': True,
                'content': clienteDiccionario,
                'message': 'Se encontro el cliente'
            }
        else:
            return {
                'ok': False,
                'content': None,
                'message': 'No se encontro el cliente'
            }, 404

# AGREGAR UN VEHICULO PERO QUE VERIFIQUE SI EL ID DEL CLIENTE EXISTE


class Vehiculo (Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'placa',
            type=str,
            required=True,
            help="Falta la placa")
        parser.add_argument(
            'modelo',
            type=str,
            required=True,
            help="falta el modelo")
        parser.add_argument(
            'marca',
            type=str,
            required=True,
            help="Falta la marca"
            )
        parser.add_argument(
            'color',
            type=str,
            required=True,
            help="Falta el color"
            )
        parser.add_argument(
            'cliente_id',
            type=str,
            required=True,
            help="Falta el id de cliente"
            )
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM T_CLIENTE WHERE CLIENTE_ID=%s",(data['cliente_id'],))
        cliente = cur.fetchone()
        if cliente:
            cur.execute("INSERT INTO T_VEHICULO (veh_placa, veh_modelo, veh_marca, veh_color, cliente_id) VALUES (%s,%s,%s,%s,%s)",(data['placa'],data['modelo'],data['marca'],data['color'],data['cliente_id']))
            mysql.connection.commit()
            cur.close()
            # QUE ME MUESTRE EL CLIENTE EN EL RESULTADO
            # {
        #           "placa": "A3A425",
        #           "modelo": "Accent",
        #           "marca": "Hyundai",
        #           "color": "#035624",
        #           "cliente":{
        #                "nombre":"eduardo"
        #                "apellido":"eduardo"
        #                "correo":"eduardo"
        #           }
            # }
            return {
                'ok':True,
                'message':'Se agrego el vehiculo exitosamente',
                'content':data
            }, 201
        else:
            return {
                'ok':False,
                'message':'El id del cliente no existe'
            }, 404


class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "correo",
            type=str,
            required=True,
            help="Falta el correo")
        parser.add_argument(
            "password",
            type=str,
            required=True,
            help="Falta el password")
        # Aqui hace la validacion de los parser
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT usu_hash,usu_salt FROM T_USUARIO WHERE USU_EMAIL =%s", (data['correo'],))
        resultado = cur.fetchone()
        print(resultado)
        if resultado:
            # VALIDAR LA CONTRASEÑA
            password = bytes(data['password'], 'utf-8')
            salt = bytes(resultado[1], 'utf-8')
            hashed = bcrypt.hashpw(password, salt)
            hashed = hashed.decode('utf-8')
            # SI EL HASH ALMACENADO EN LA BD ES IGUAL QUE EL HASH QUE RECIEN HEMOS GENERADO A PARTIR DE LA SALT DE LA BD CON LA CONTRASEÑA, ENTONCES LA CONTRASEÑA ES LA CORRECTA
            if hashed == resultado[0]:
                return{
                    'message': 'Bienvenido'
                }, 202
            else:
                return {
                    'message': 'Correo o contraseña incorrectos'
                }, 405
        else:
            return {
                'message': 'Correo o contraseña incorrectos'
            }, 405


api.add_resource(Usuario, '/registrar')
api.add_resource(Login, '/login')
api.add_resource(Cliente, '/cliente', '/cliente/<string:correo>')
api.add_resource(Vehiculo,'/vehiculo')

@app.route('/')
def ruta_inicial():
    return 'La api funciona exitosamente'
