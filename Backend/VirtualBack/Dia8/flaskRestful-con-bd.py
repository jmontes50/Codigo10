from flask import Flask, request
from flask_restful import Api, Resource
from flask_mysqldb import MySQL

app = Flask(__name__)
api = Api(app)
# CONEXION MYSQL
app.config['MYSQL_HOST']="localhost"
app.config['MYSQL_USER']="root"
app.config['MYSQL_PASSWORD']="root"
app.config['MYSQL_DB']="galeriaCodigo10"

mysql = MySQL(app)

@app.before_first_request
def crear_tablas():
    cursor = mysql.connection.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS T_CATEGORIA(
        CAT_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        CAT_NOM VARCHAR(45),
        CAT_EST TINYINT DEFAULT TRUE
    );
    CREATE TABLE IF NOT EXISTS T_INQUILINO(
        INQ_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        INQ_NOMBRE VARCHAR(45),
        INQ_FONO VARCHAR(10),
        INQ_CORREO VARCHAR(45),
        INQ_EST TINYINT DEFAULT TRUE,
        CAT_ID INT,
        FOREIGN KEY (CAT_ID) REFERENCES T_CATEGORIA(CAT_ID)
    );
    CREATE TABLE IF NOT EXISTS T_STAND(
        STAND_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        STAND_NRO VARCHAR(15),
        STAND_PISO INT,
        STAND_AREA DECIMAL(5,2),
        INQ_ID INT,
        FOREIGN KEY (INQ_ID) REFERENCES T_INQUILINO(INQ_ID)
    );
    """
    # SI NO QUIERES ELIMINAR LA BASE DE DATOS SIMPLEMENTE TENDRÍAS QUE MODIFICAR LAS TABLAS
    # ALTER TABLE T_CATEGORIA ADD COLUMN CAT_EST TINYINT DEFAULT TRUE

    cursor.execute(query)
    cursor.close()

class Categoria(Resource):
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * from T_CATEGORIA WHERE CAT_EST=true")
        data = cur.fetchall()
        nuevaData =[]
        for fila in data:
            fila = {
                "id": fila[0],
                "nombre": fila[1]
            }
            nuevaData.append(fila)
        del data
        cur.close()
        return {
            'ok':True,
            'content':nuevaData
        }
    def post(self):
        data = request.get_json()
        if data.__contains__('nombre'):
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO T_CATEGORIA (CAT_NOM) VALUES ('{}')".format(data['nombre']))
            mysql.connection.commit()
            cur.close()
            return {
                'ok':True,
                'content':data
            }, 201
        else:
            return {
                'ok': False,
                'message': 'Faltan campos'
            }, 500
    def put (self,id_categoria):
        data = request.get_json()
        # Validar si existe la categoria , si existe actualizar, pero si no, indicar que no existe
        cur = mysql.connection.cursor()
        cur.execute("SELECT * from t_categoria where cat_id=%s",(id_categoria,))
        resultado = cur.fetchone()
        if resultado:
            if data.__contains__('nombre'):
                cur.execute("UPDATE T_CATEGORIA SET cat_nom=%s where cat_id=%s",(data['nombre'],id_categoria))
                mysql.connection.commit()
                cur.close()
                return {
                    'ok': True,
                    'message': 'Se actualizo la categoria exitosamente'
                }, 201
            else:
                return {
                    'ok': False,
                    'message': 'Faltan campos'
                }, 500
        else:
            cur.close()
            return{
                'ok':False,
                'message':'No existe esa categoria con ese ID'
            }, 404
    
    def options(self,id_categoria):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * from T_CATEGORIA WHERE cat_id=%s",(id_categoria,))
        resultado = cur.fetchone()
        print(resultado)
        resultadofinal=[]
        cur.close()
        if resultado:
            if resultado[2] == 0:
                return{
                    'ok':True,
                    'message':'La categoria esta inhabilidada'
                }
            else:
                resultadofinal={
                    "id":resultado[0],
                    "nombre":resultado[1]
                }
        return {
            'ok':True,
            'content':resultadofinal
        }
    def delete(self, id_categoria):
        cur = mysql.connection.cursor()
        cur.execute("UPDATE T_CATEGORIA set cat_est=false where cat_id=%s",(id_categoria,))
        mysql.connection.commit()
        cur.close()
        return {
            'ok': True,
            'message':'Categoria eliminada con exito'
        }

class Inquilino(Resource):
    def post(self):
        data = request.get_json()
        if data.__contains__('nombre') and data.__contains__('fono') and data.__contains__('correo') and data.__contains__('cat_id'):
            cur = mysql.connection.cursor()
            cur.execute("SELECT * from T_CATEGORIA where cat_id =%s",(data['cat_id'],))
            resultado = cur.fetchone()
            if resultado:
                cur.execute("INSERT INTO T_INQUILINO (inq_nombre, inq_fono, inq_correo, cat_id) VALUES (%s,%s,%s,%s)",(data['nombre'],data['fono'],data['correo'],data['cat_id']))
                mysql.connection.commit()
                cur.close()
                return {
                    'ok':True,
                    'message':'Se agrego el inquilo con exito'
                }, 201
            else:
                cur.close()
                return {
                    'ok':False,
                    'message': 'La categoria no existe'
                }, 404
        else:
            return {
                'ok':False,
                'message':'Faltan datos'
            },500
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * from T_INQUILINO as Inq inner join T_categoria as Cat on Inq.cat_id = Cat.cat_id where inq_est=true")
        # QUE lo que devuelva sea en forma de un diccionario (llave y un valor)
        # Traer con su nombre de categoria mas 
        data = cur.fetchall()
        cur.close()
        nuevaData=[]
        for fila in data:
            print(fila)
            nuevaData.append({
                'id':fila[0],
                'nombre':fila[1],
                'telefono':fila[2],
                'correo':fila[3],
                'categoria':{
                    'id':fila[6],
                    'nombre':fila[7]
                }
            })
        # print(data)
        return {
            'ok':True,
            'content':nuevaData
        }
    def delete(self, id_inquilino):
        cur = mysql.connection.cursor()
        cur.execute("UPDATE T_INQUILINO set inq_est=false where inq_id=%s",(id_inquilino,))
        mysql.connection.commit()
        cur.close()
        return{
            'ok':True,
            'message':'Inquilino eliminado con exito'
        }

    def put(self, id_inquilino):
        data = request.get_json()
        if data.__contains__('nombre') and data.__contains__('fono') and data.__contains__('correo') and data.__contains__('cat_id'):
            cur = mysql.connection.cursor()
            cur.execute("SELECT * from T_CATEGORIA where cat_id =%s",(data['cat_id'],))
            resultado = cur.fetchone()
            cur.execute("SELECT * from t_inquilino where inq_id=%s and inq_est=true",(id_inquilino,))
            resultado2 = cur.fetchone()
            if resultado and resultado2:
                cur.execute("UPDATE T_INQUILINO SET inq_nombre=%s, inq_fono=%s, inq_correo=%s, cat_id=%s where inq_id=%s",(data['nombre'],data['fono'],data['correo'],data['cat_id'], id_inquilino))
                mysql.connection.commit()
                cur.close()
                return {
                    'ok':True,
                    'message':'Se modifico el inquilo con exito'
                }, 201
            else:
                cur.close()
                if resultado is None:
                    return {
                        'ok':False,
                        'message': 'La categoria no existe'
                    }, 404
                elif resultado2 is None:
                    return {
                        'ok':False,
                        'message': 'El inquilino no existe'
                    }, 404
        else:
            return {
                'ok':False,
                'message':'Faltan datos'
            },500


api.add_resource(Inquilino,'/inquilino','/inquilino/<int:id_inquilino>')
api.add_resource(Categoria,'/categoria','/categoria/<int:id_categoria>')

if __name__ =="__main__":
    app.run(debug=True)