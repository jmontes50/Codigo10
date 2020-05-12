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


api.add_resource(Categoria,'/categoria','/categoria/<int:id_categoria>')

if __name__ =="__main__":
    app.run(debug=True)