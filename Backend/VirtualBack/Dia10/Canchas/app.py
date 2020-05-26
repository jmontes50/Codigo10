from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from base_de_datos import bd

from models.empresa import EmpresaModel
from controllers.departamento import DepartamentoController
from models.distrito import DistritoModel

app = Flask(__name__)
CORS(app, methods=['GET','POST'],origins=['http://127.0.0.0.1:3000','http://www.goOgle.com'])
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:root@127.0.0.1:3306/canchasCodigo10"
api = Api(app)
@app.route("/")
def inicio():
    return "LA API REST HA ESCUCHADO TUS SUPLICAS!"

@app.before_first_request
def iniciar_bd():
    # PARA INICIAR LA APLICACION DE SQL ALCHEMY
    bd.init_app(app)
    # PARA ELIMINAR TODA LA BASE DE DATOS (SE PIERDE TODA LA INFORMACION CONTENIDA)
    # NO HACER EN MODO DE PRODUCCION
    # bd.drop_all(app=app)
    # PARA CREAR TODAS LAS TABLAS
    bd.create_all(app=app)

# RUTAS
api.add_resource(DepartamentoController,'/departamento','/departamento/<int:id>')


if __name__=="__main__":
    app.run(debug=True)