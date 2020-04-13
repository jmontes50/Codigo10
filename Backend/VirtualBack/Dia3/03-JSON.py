# JSON => JavaScript Object Notation
# es una forma de almacenar ordenadamente los datos e intercambiar datos que estan en formato texto
import json
producto = {
    "nombre":"Jabon",
    "precio":7.50,
    "disponible":True
}
# producto.nombre => Jabon
# convertir un diccionario a un json
producto_json = json.dumps(producto)
print(type(producto_json))
print(producto_json)
print(producto_json[0:5])

# convertir un json a un diccionario
producto_diccionario = json.loads(producto_json)
print(type(producto_diccionario))
print(producto_diccionario["nombre"])