mes="Marzo"
print(mes)
# Texto con variables
print("El mes es:",mes)
dia = 24
# MODO II
print("El mes es {} y el dia es {}".format(mes,dia))
# MODO III: modificando el orden de variables a imprimir
print("El dia es {1} del mes de {0}".format(mes,dia))
# MODO IV: concatenando texto y variables en una linea
print(f"Hoy es {dia} de {mes}")
# MODO V: restringir la cantidad de decimales de una variables
pi = 3.141529342738
print(f"La variable tiene el valor de: {pi:.3f}")
