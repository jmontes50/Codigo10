# Secuencia de caracteres que forma una busqueda de un patron, sirve para verificar una cadena de texto para ver si contieen un patron en especifico
import re # regular expression 
# https://docs.python.org/3/library/re.html
texto = "Hola, mi nombre es Eduardo"
print(re.search("nombres",texto))
# search sirve para buscar la palabra en una cadena de texto
if (re.search("nombres",texto)):
    print("Se encontro la palabra")
else:
    print("La palabra no existe en el texto")

# Buscar la palabra pero al final de la oracion
# $
print(re.search("es$", texto))

# Buscar la palabra pero al comienzo de una oracio
# ^
print(re.search("^Ho",texto))

# findall => buscar todas las coincidencias que hay en un texto
# La triple doble comilla se usa para definir un string pero que va a ser capaz de tener varias lineas de contenido y se respeta su salto de linea
texto2="""
El dia es azul,
El dia esta nublado,
El dia esta soleado"""
print(re.findall("dia",texto2))
# .* => No importa lo que hay entre esas dos palabras, solamente queremos encontrar si estan en ese orden
print(re.findall("dia.*es",texto2))

texto3 = "Es martes y esta haciendo calor"
# split => sirve para separar lo que esta contenido en la cadena de texto segun un identificador y ese identificador deja de pertener a la cadena de texto
print(re.split("y",texto3))

# sub => sirve para reemplazar la palabra a buscar por una nueva palabra
print(re.sub("martes","miercoles",texto3))
# NOTA : En cualquiera de los metodos de la libreria re se pueden usar expresiones regulares

# EJERCICIO
# Usando el modulo de re se debe ingresar una cadena texto y ver si hay un numero, y una mayuscula como minimo ademas de tener una longitud de no menor de 6 caracteres, si todo es valido indicar que la contraseña es valida, sino indicar que no cumple con los requisitos minimos

import re 
password = input("Ingrese su contraseña: ")
if re.match(r'[A-Za-z0-9]{6,}',password):
    print('La contraseña cumple con los requisitos')
else:
    print('Contraseña incorrecta')