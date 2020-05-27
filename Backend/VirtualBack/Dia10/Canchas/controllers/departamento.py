from flask_restful import Resource, reqparse
from models.departamento import DepartamentoModel

class DepartamentoController(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'descripcion',
        type=str,
        required=True,
        help='Falta el nombre del departamento'
    )
    def post(self):
        data = self.parser.parse_args()
        # data = {
        #   'descripcion':'Loreto'
        # }
        departamento = DepartamentoModel(data['descripcion'])
        try:
            departamento.guardar()
            # print(departamento.descripcion)
            return {
                'ok':True,
                'message': 'Departamento creado exitosamente',
                'content':departamento.retornarJson()
            }, 201
        except:
            return {
                'ok' :False,
                'message': 'Hubo un error al registrar el departamento, intente nuevamente'
            }, 500
    def get(self, id):
        resultado = DepartamentoModel.query.filter_by(id=id).first()
        # .first() => devuelve la primera coinciencia
        # .limit(n) => trae los n primeras coincidencias
        # .all() => devuelve todas las coincidencias
        # NOTA todos devuelven en LISTAS excepto el first que devuelve un solo objeto
        if resultado:
            return {
                'ok': True,
                'content':resultado.retornarJson()
                }
        else:
            return {
                'ok':False,
                'message': 'No existe el departamento con id {}'.format(id,)
            },404

    def put(self, id):
        data = self.parser.parse_args()
        resultado = DepartamentoModel.query.filter_by(id=id).first()
        if resultado:
            try:
                resultado.actualizar_departamento(data['descripcion'])
                return {
                    'ok':True,
                    'message':'Se actualizo el departamento',
                    'content':resultado.retornarJson()
                },201
            except:
                return {
                    'ok': False,
                    'meesage': 'Hubo un error al actualizar el departamento, intente nuevamente'
                },500
        else:
            return{
                'ok':False,
                'message':'No existe el departamento a actualizar'
            },404

class DepartamentosController(Resource):
    def get(self):
        resultado = DepartamentoModel.query.all()
        if resultado:
            listResultado=[]
            for departamento in resultado:
                listResultado.append(departamento.retornarJson())
            return {
                'ok': True,
                'content': listResultado
            }
        else:
            return {
                'ok':True,
                'message': 'No hay departamentos disponibles'
            },404