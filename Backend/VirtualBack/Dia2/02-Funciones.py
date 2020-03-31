# Para definir una funcion en python se usa la palabara reserverda def
def saludar():
    """Funcion que te saluda sin recibir nada"""
    print("Hola buenas tardes")

def saludarConNombre(nombre):
    """Funcion que recibe un parametro y te saluda"""
    print("Hola {} buenas tardes".format(nombre))

# saludar()
# saludarConNombre("Eduardo")

def sumar(num1, num2):
    suma = num1 + num2
    return suma

resultado = sumar(4,5)
# print(resultado)

# Para definir valores por defecto (default) siempre van al final de la recepcion de los parametros de la funcion
def restar ( num1, num2, num0=0):
    resta = num1-num2
    return resta

resultadoResta = restar(num2=4,num1=5)
# print(resultadoResta)

# La variable *args (arguments) es una lista dinamica de elementos para recibir un numero indeterminado de variables
def indeterminada (*args):
    for elemento in args:
        print(elemento)

# indeterminada(20,"Martes",[1,2,3,4,5])
# indeterminada(1)
# indeterminada("lunes","martes","miercoles")

# **kwargs (keyword argument) en una variable para recibir un numero ilimitado de parametros pero usando los diccionarios
diccionario = {
    "llave":"valor",
    "llave1":"valor1"
}
# print(diccionario)
def indeterminada_diccionario (**kwargs):
    print(kwargs)
# indeterminada_diccionario(dia="Martes",nota=15,tareas=[1,2,3,4,5])

def raiz_cuadrada(numero):
    pass

def funcion2():
    return 18, "viernes", ["verano","otoño","invierno","primavera"]

variable = funcion2()
nota, dia, estaciones = funcion2()
# print(variable)
# print(nota, dia, estaciones)


def indeterminada_mix(*args, **kwargs):
    print(args)
    print(kwargs)

indeterminada_mix(10,20,"A","Otoño",50.5, mensaje="Buenos dias", mes="Marzo",descripcion="Tomates")
