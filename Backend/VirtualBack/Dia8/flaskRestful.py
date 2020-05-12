# pip install flask-restful
from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
items = [
    {
        "nombre":"Papaya",
        "cantidad":20
    }
]

class Item(Resource):
    def get(self):
        # No necesitamos jsonify porque flask_restful automaticamente hace la conversion de un diccionario a un json, ademas no se debe declarar decoradores puesto que todo se declara en el enturamiento de la API
        return {
            'message':'Ok',
            'result':items
        }
    def post(self):
        data = request.get_json()
        if data.__contains__('nombre') and data.__contains__('cantidad'):
            itemtemporal = {
                "nombre":data['nombre'],
                "cantidad":data['cantidad']
            }
            items.append(itemtemporal)
            return {
                'ok':True,
                'message':'Se agrego exitosamente el item',
                'content':data
            }, 201
        else:
            return {
                'message':'Faltan los datos',
                'ok':False
            },500

    def put(self,id):
        if items.__len__() > id:
            data = request.get_json()
            if data.__contains__('nombre') and data.__contains__('cantidad'):
                items[id]['nombre']=data['nombre']
                items[id]['cantidad']=data['cantidad']
                return {
                    'ok': True,
                    'message':'se actualizo el item con exito',
                    'content':items[id]
                }
            else:
                return {
                    'ok':False,
                    'message':'Faltan datos para actualizar'
                }
        else:
            return {
                'ok':False,
                'message': 'No existe un item con ese id'
                }
    def delete(self, id):
        if items.__len__() > id:
            del items[id]
            return {
                'ok':True,
                'meesage': 'se elimino el item exitosamente'
            }
        else:
            return {
                'ok':False,
                'message': 'No existe un item con ese id'
                }
    def options(self,id):
        if items.__len__() > id:
            return {
                'ok':True,
                'content': items[id]
            }
        else : 
            return {
                'ok':False,
                'message': 'No existe un item con ese id'
                }
    
@app.route("/")
def inicio():
    return 'La API FUNCIONA'

# Con flask_restful se usa un diccionario de las API
api.add_resource(Item,'/item','/item/<int:id>')

if __name__ =='__main__':
    app.run(debug=True)
