from flask import Flask, request, jsonify

app = Flask(__name__)
# un API en la cual ingresemos el producto, lo editemos, lo eliminemos y mostremos los productos
tienda = [
    {
        'nombre':'Tomate',
        'precio':1.20,
        'cantidad':50
    }
]
# LA ruta local siempre va a ser http://127.0.0.1:5000 ó http://localhost:5000
@app.route('/')
def inicio():
    return 'La API de tiendas funciona'

# GET => SE USA PARA SOLICITAR DATA SIN MANDAR NADA (LOS NAVEGADORES SOLO SON CAPACES DE USAR GET)
# POST => SE USA PARA MANDAR INFORMACION POR MEDIO DEL BODY (CUERPO)
# PUT => SE USA PARA ACTUALIZAR INFORMACION CON CONTENIEDO MANDADO POR EL BODY
# DELETE => SE USA PARA ELIMINAR INFORMACION

@app.route('/productos/agregar', methods=['POST'])
def agregar_producto():
    # metodo que automaticamente captura la informacion recibida y la convierte en un DICCIONARIO
    data = request.get_json()
    tienda.append(data)

    return jsonify({
        'ok': True,
        'message': 'Se agrego el producto a la tienda',
        'content': data
    }), 201


@app.route('/productos/traer/todos', methods=['GET'])
def devolver_productos():
    return jsonify({
        'ok': True,
        'content': tienda # data
    })



@app.route('/producto/traer/<string:nombre>')
def buscar_por_nombre(nombre):
    # que busque dentro de mi lista tienda y encuentre si existe ese producto y si no que indique que no existe
    for producto in tienda:
        print(producto)
        if producto['nombre']==nombre:
            return jsonify({
                'ok': True,
                'content':producto
            })

    return jsonify({
        'ok':False,
        'message':'No se encontro el producto'
    }),404


@app.route('/producto/actualizar/<int:id>', methods=['PUT'])
def actualizar_producto(id):
    # Dado el id (posicion de la lista) modificar el contenido de esa posicion por lo mandado por el body y que retorne lo actualizado
    data = request.get_json()
    if (len(tienda) > id and id>=0):
        tienda[id]=data
        return jsonify({
            'ok':True,
            'content':tienda[id],
            'message': 'Producto actualizado con exito'
        }), 201
    else:
        return jsonify({
            'ok': False,
            'message': 'Valor fuera de rango'
        }), 404

@app.route('/producto/eliminar/<int:id>', methods=['DELETE'])
def eliminar_producto(id):
    # list.remove(cantidad) => elimina la primera posicion de la lista y se indica las cantidades que queremos eliminar 
    # mi_variable = list.pop(posicion) => aparte de quitar el elemento nos devuelve el elemento eliminado para poder almacenarlo en una variable x ejemplo
    # del lista[ini:fin] => elimina el contenido
    if (len(tienda) > id and id >= 0):
        del tienda[id]
        return jsonify({
            'ok': True,
            'message': 'Producto eliminado con exito'
        }) 
    else:
        return jsonify({
            'ok': False,
            'message': 'Valor fuera de rango'
        }), 404



if __name__ == '__main__':
    app.run(debug=True)