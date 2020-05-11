from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
# CREDENCIALES DE MYSQL
app.config["MYSQL_HOST"]="127.0.0.1"
app.config["MYSQL_USER"]="root"
app.config["MYSQL_PASSWORD"]="root"
app.config["MYSQL_DB"]="instituto"

# ALTER USER 'username'@'server' IDENTIFIED WITH mysql_native_password BY 'password';

# Creamos una instancia de la clase MySQL y le pasamos el objeto app porque ahi esta la configuracion a la conexion al servidor
mysql = MySQL(app)

@app.route("/tipo",methods=['POST','GET','PUT','DELETE'])
def crud_tipo():
    data = request.get_json()
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        if data.__contains__('nombre'):
            cur.execute('INSERT INTO T_TIPO (TIPO_NOMBRE) VALUES (%s)',(data['nombre'],))
            mysql.connection.commit()
            cur.close()
            return jsonify({
                'message':'Se agrego con exito el tipo',
                'content': data,
                'ok':True
            }), 201
        else:
            return jsonify({
                'message': 'Falta el campo nombre en el body',
                'ok':False
            }), 404
    elif request.method == 'GET':
        cur.execute('SELECT * from t_tipo where tipo_est=true')
        # fetchall() => devuelve todas las coincidencias de mi query, lo convierte en una tupla de tuplas 
        # fetchone() => devuelve la primer coincidencia de mi query, lo deja en una sola tupla
        data = cur.fetchall()
        cur.close()
        # return jsonify(data)
        resultado = []
        for fila in data:
            diccionario_temporal ={
                "id":fila[0],
                "nombre":fila[1]
            }
            resultado.append(diccionario_temporal)
            
        return jsonify({
            "ok":True,
            "content":resultado
            })

# Vamos a hacer los endpoints para un tipo en especifico
@app.route("/tipo/<int:id>",methods=['GET','PUT','DELETE'])
def tipo_especifico(id):
    cur = mysql.connection.cursor()
    if request.method == 'PUT':
        data = request.get_json()
        if data.__contains__('nombre'):
            cur.execute(f"UPDATE t_tipo set tipo_nombre= '{data['nombre']}' where tipo_id={id}")
            # cur.execute("UPDATE t_tipo set tipo_nombre= (%s) where tipo_id=(%s)",(data['nombre'],id))
            mysql.connection.commit()
            cur.close()
            return jsonify({
                'ok':True,
                'message':'Se actualizó el tipo exitosamente'
            }), 201
    elif request.method == 'DELETE':
        cur.execute(f'UPDATE t_tipo set tipo_est=false where tipo_id={id}')
        mysql.connection.commit()
        cur.close()
        return jsonify({
            "ok":True,
            "message":"Se inhabilito el tipo exitosamente"
        }), 201
    elif request.method =='GET':
        cur.execute(f"SELECT * from t_tipo where tipo_id ={id}")
        data = cur.fetchone()
        cur.close()
        if data:
            diccionario_rpta={
                "id":data[0],
                "nombre":data[1]
            }
            return jsonify({
                "ok":True,
                "content":diccionario_rpta
            })
        else:
            return jsonify({
                "ok":False,
                "message":"No hay informacion que mostrar"
            }),404

# Agregar una ruta para ingresar un nuevo ambiente pero que verifique que el tipo y el pabellon existen antes de ingresar y que devuelva el ambiente ingresado correctamente.

@app.route("/")
def inicio():
    return 'La API funciona exitosamente! :D'

if __name__=="__main__":
    app.run(debug=True)