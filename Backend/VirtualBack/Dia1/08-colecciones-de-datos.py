# LISTAS
colores =["rojo", "verde","amarillo","azul"]
# print(colores)
# imprimir el ultimo color de la lista
# print(colores[-1])
# imprimir desde la posicion 0 hasta la posicion 2
# print(colores[0:2])
# imprimit desde la primera posicion hasta el final
# print(colores[1:])

# Todas las formas de impresion de las listas tambien sirven para los string
texto = "Hola a todos buenas tardes"
# print(texto[2:10])
# SOLAMENTE SIRVE PARA VISUALIZAR MAS NO PARA EDITAR LOS TEXTOS
# colores[1]="Negro"
# print(colores)
# texto[3]="e"
# print(texto)

# Metodo para agregar nuevos datos a la lista
# colores.append("Violeta")
# print(colores)

# Metodo para eliminar un objeto de la lista
# colores.remove("Violeta")
# print(colores)
# colores.pop(2)
# print(colores)

# Metodo para limpiar toda la lista
# colores.clear()
# print(colores)

# para ver la longitud de la lista
# print(len(colores))

# NOTA: en una lista no necesariamente todos los datos tienen que ser del mismo tipo
variada =["Eduardo",2020, False, 19.5, ["Algebra","Fisica"]]
# EN javascript a la lista se le conoce como ARRAY (arreglo)
# print(type(variada))

# TUPLAS
# Coleccion de elementos ORDENADA QUE NO SE PUEDE MODIFICAR
# Es inalterable y generalmente sirve para usar elementos que nunca se van a modificar x ejem: las claves del servidor, constantes como el margen de ganancia
tupla_nombres = ("Juan","Rafaela","Cristina","Luis")
# print(tupla_nombres)
# print(tupla_nombres[1])
# Para ver su longitud de la tupa
# print(len(tupla_nombres))

# Para ver cuantos elementos repetidos hay
# print(tupla_nombres.count("Luis"))
# Esto no se puede hacer
# tupla_nombres[1]="Maria"

# Conjuntos
# Coleccion de elementos DESORDENADA, eso significa que no tiene indice para acceder a sus elementos
temporadas = {"verano","invierno","primavera","otoño"}
# print(temporadas)
# for temporada in temporadas:
#     print(temporada)
# Para agregar un nuevo item al conjunto
temporadas.add("Otra temporada")
# print(temporadas)

# Diccionarios
# Tiene una gran similitud con los JSON que se usan para el envio y recibo de informacion entre el backend y el frontend
# Coleccion de elementos que estan indexados, no estan ordenados y se puede modificar sus valores. Estan conformados por una clave y un valor
dias={
    "Lunes":"Soleado",
    "Martes":"Lluvioso",
    "Miercoles":"Nieve",
    "Jueves":"Granizo",
    "Viernes":"Parcialmente nublado",
    "Sabado":"Soleado",
    "Domingo":"Indeciso"
}
print(dias["Lunes"])
# Para agregar simplemente ingreso una llave NO DEFINIDA en el diccionario y su valor
dias["Otro"]="Sin pronostico"
# 1ra forma de borrar un diccionario
dias.pop("Otro")
# 2da forma de borrar
del(dias["Lunes"])

print(dias)
for llave, valor in dias.items():
    print(llave,valor)