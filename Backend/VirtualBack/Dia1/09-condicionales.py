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
if edad >= 65:
    print("Puede votar pero es opcional")
elif edad >= 18:
    print("Es obligatorio votar")
else:
    print("No puede votar")

# Ingresar por teclado el sexo de la persona si ingresa Masculino que indique que es hombre, si ingresa Femenino que indique es es mujer y si ingresa otro sexo que indique que aun no esta registrado 