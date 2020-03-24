# Operadores aritmeticos
# + suma
# - resta
# * multiplicacion
# / division
# % modulo
# ** exponente
# // cociente (SOLO PYTHON)
num1 = 10 
num2 = 20
num3 = num1+num2
print(num3)
num3 = num1 ** num2
print(num3)
num3 = num2 // num1
print(num3)

# -----------------------
# Operadores asignacion
# = Igual
# += Incremento
# -= Decremento
# *= Multiplicador
# /= Division
# *= Potencia
# num1 += num2 es lo mismo que haber puesto num1 = num1 + num2
num1 += num2
print(num1)

# es lo mismo que haber puesto num1 = num1 - num2
num1 -= num2
print(num1)

# -----------------------
# Operadores Comparacion
# == si es igual
# != si es diferente
# <, > es menor o mayor que
# <=, >= es menor o igual que , es mayor o igual que
print(num1==num2)
print(num1!= num2)

# -----------------------
# Operadores Logicos
# and
# or 
# not
# En el caso de AND todos deben ser verdaderos para que todo sea verdadero, si hay algun resultado falso, todo es falso
# En el caso de OR basta con que uno sea verdadero para que todo sea verdadero, si todo es falso, sera falso
print((10<20) and (9<10))
print((10<9) or (9<20))
print(not(10<20))

# -----------------------
# Operadores de Identidad
# is => es
# is not => no es
# sirve para ver si estan apuntando a la misma direccion de memoria
frutas= ["Manzana", "Pera"]
frutas2 = frutas
print(frutas2 is frutas)
print(frutas2 is not frutas)

# -----------------------
# Operadores de Pertenencia
# in => para ver si esta contenido
# not int => para ver si no esta contenido
dias = ["Lunes","Miercoles","Viernes"]
dia = "Sabado"
print(dia in dias)
print(dia not in dias)