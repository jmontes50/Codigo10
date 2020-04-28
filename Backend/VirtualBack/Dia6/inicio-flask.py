# pip install flask
# https://flask.palletsprojects.com/en/1.1.x/
from flask import Flask

# __name__ sirve para definir que nuestra aplicacion Flask se va a ejecutar en el archivo principal
app = Flask(__name__)

@app.route('/')
def ruta_inicial():
    return 'La API funciona :D'

# para que el servidor se reinicie cuando vea algun cambio automaticamente, se pone el parametro debug=True, y si queremos cambiar el puerto que vamos a usar para el servidor usar el parametro port=5001
app.run(debug=True, port=5001)