# funciones pequeñas y anonimas de una sola linea de codigo como mucho, se almacena en una variable, siempre va a retornar un valor o un resultado

resultado = lambda numero: numero
print(type(resultado))
var1 = resultado(20)
print(var1)

# Se puede recibir la cantidad de valores que uno desee
resultado2 = lambda numero1, numero2: numero1 + numero2

# Su comparativa con una funcion normal seria:
def sumar ( numero1, numero2):
    return numero1 + numero2
# print(resultado2(10,50))

# Se puede pasar argumentos ilimitados como *args y los **kwargs
resultado3 = lambda *args, **kwargs: [args,kwargs]

# print(resultado3(1,2,3,4,5,7,8,titulo="Practica",nombre="Marzo"))