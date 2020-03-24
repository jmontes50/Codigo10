# condicional IF ELSE ELIF
# IF => SI
# ELSE => SINO
# ELIF => SINO SI
# El if siempre va a funcionar mientas la condicion resultante sea  VERDADERA
edad = 15
# print(edad>18)
# if edad > 18:
#     print("La persona es mayor de edad")
# else:
#     print("La persona es menor de edad")

# elif => verifica otra condicion si puede ser verdad, si o si tiene que ir antes del else
# edad = 15
# if edad >= 65:
#     print("Puede votar pero es opcional")
# elif edad >= 18:
#     print("Es obligatorio votar")
# else:
#     print("No puede votar")

# Ingresar por teclado el sexo de la persona si ingresa Masculino que indique que es hombre, si ingresa Femenino que indique es es mujer y si ingresa otro sexo que indique que aun no esta registrado
# sexo = input("Ingresa tu sexo:")
# if sexo == "Masculino" or sexo=="masculino":
#     print("Eres hombre")
# elif sexo == "Femenino" or sexo=="femenino":
#     print("Eres mujer")
# else:
#     print("Aun no tenemos registrado ese sexo")

# BUCLES
# FOR
# Es usado para iterar sobre una secuencia de elementos
texto = "Buenas tardes"
# for letra in texto:
#     print(letra, end=" ")

# range() => admite hasta 3 parametros, si le ingreso un parametro es el tope, si le ingreso dos, el primero es el inicio y el segundo es el tope, si le ingreso tres parametros, el primero es el inicio, el segundo es el tope y el tercero es cuantas veces va a modificar en cada vuelta
# for numero in range(5, 15):
#     print(numero)
#     if numero == 10:
#         break
#     if numero == 8:
#         continue
#     print("Otra letra")
# break => para el bucle
# continue => para SOLAMENTE la iteracion actual

# Ingresar 10 numeros y guardarlos en una lista y luego indicar cuales son pares y cuales son impares
# Facil: Teniendo 10 numeros indicar cuales son pares y cuales son impares
numeros = [2, 6, 9, 15, 18, 19, 23, 43, 68, 14]
lista_numeros=[]
for numero in range(10):
    dato = input(f"Ingresa el numero {numero+1}: ")
    dato = int(dato)
    lista_numeros.append(dato)
print(lista_numeros)
numeros_pares=[]
numeros_impares=[]
for numero in lista_numeros:
    if numero%2==0:
        numeros_pares.append(numero)
    else:
        numeros_impares.append(numero)
print(f"Los numeros pares son: {numeros_pares}")
print("Los numeros impares son: {}".format(numeros_impares))


# se desea saber cuantos son pares y cuantos son impares
numeros = [2, 6, 9, 15, 18, 19, 23, 43, 68, 14]
# hay 4 pares
# hay 6 impares