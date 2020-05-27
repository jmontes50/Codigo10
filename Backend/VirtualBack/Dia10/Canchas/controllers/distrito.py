from flask_restful import Resource, reqparse
from models.distrito import DistritoModel
from models.departamento import DepartamentoModel

class DistritoController(Resource):
    def get(self,id):
        resultado = DistritoModel.query.filter_by(id=id).first()
        return {
            'ok':True,
            'content':resultado.retornarJsonConDepartamento()
        }
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'nombre',
            type=str,
            required=True,
            help='Falta el nombre'
        )
        parser.add_argument(
            'dep_id',
            type=int,
            required=True,
            help='Falta el id del departamento'
        )
        data = parser.parse_args()
        departamento = DepartamentoModel.query.filter_by(id=data['dep_id']).first()
        if departamento:
            distrito = DistritoModel(data['nombre'],data['dep_id'])
            try:
                distrito.guardar()
                return {
                    'ok':True,
                    'content':distrito.retornarJson()
                },201
            except:
                return {
                    'ok':False,
                    'message':'Hubo un problema al guardar el distrito'
                },500
        else:
            return {
                'ok':False,
                'meesage':'El departamento no existe'
            }

