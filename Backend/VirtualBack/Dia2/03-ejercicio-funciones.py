# 1. Funcion que recibe el nombre y la edad y si la persona es menor de edad indicar que no puede votar pero si tiene entre 18 y 65 años su voto es obligatorio y si tiene mas de 65 puede votar pero no es obligatorio


def votacion(nombre, edad):
    if edad > 18 and edad < 65:
        print("{} es obligatorio que votes".format(nombre))
    elif (edad > 65):
        print("{} es opcional tu voto".format(nombre))
    else:
        print("{} no puedes votar aún".format(nombre))

# votacion("Eduardo",17)

# 2. Escribir una funcion que le pida al usuario ingresar la altura y el ancho de un rectangulo y que lo dibuje por consola usando los *, ejemplo
# altura: 3
# ancho: 4
# -------
# Resultado:
# ****
# ****
# ****


def dibujar_rectangulo(altura, ancho):
    for alt in range(0, altura):
        for anch in range(0, ancho):
            # el end sobreescribe la forma en que va a terminar la escritura de la linea, por defecto hace un salto de linea
            print("*", end="")
        print("")

# dibujar_rectangulo(3,5)

# 3. Escribir una funcion que el usuario ingrese el ancho de un hexagono y que lo dibuje. Ejemplo
# Lado: 4
#    ****
#   ******
#  ********
# **********
# **********
# **********
# **********
#  ********
#   ******
#    ****

def dibujar_hexagono(lado):
    tope = (2*(lado-1))+lado
    espacio = lado
    for numero in range(lado, tope+1, 2):
        espacio -= 1
        espaciotxt = " "*espacio
        # cuando dos o mas variables son str y se usa el simbolo + significa concatenación
        print(espaciotxt + "*"*numero)
        if (numero == tope):
            limite = 0
            while(limite < lado-1):
                print("*"*numero)
                limite += 1
    espacio = 1
    for numero in range(tope-2, lado-1, -2):
        espaciotxt = " "*espacio
        espacio += 1
        print(espaciotxt + "*"*numero)


dibujar_hexagono(6)

# 4. Escribir una funcion que el usuario ingrese la altura de un triangulo invertido
# altura: 4
# ****
# ***
# **
# *


def dibujar_triangulo(altura):
    for alt in range(altura, 0, -1):
        for anch in range(alt, 0, -1):
            print("*", end="")
        print("")


def dibujar_rectangulo2(altura):
    for fila in range(altura, 0, -1):
        print("*"*fila)
# dibujar_triangulo(8)
# dibujar_rectangulo2(5)
