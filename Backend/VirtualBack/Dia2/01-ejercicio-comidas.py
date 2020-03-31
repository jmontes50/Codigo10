# Ingresar el dia de la semana y el dinero que tengamos. Si es lunes y tenemos entre 20 y 50 soles podemos ir al cine, si tenemos mas de 50 soles podemos comer un pollo a la brasa. Si es martes y tenemos entre 15 y 30 soles podemos comer una pizza 2x1 y si tenemos entre 30 y 50 soles podemos ir a los juegos mecanicos pero si tenemos mas de 50 soles podemos ir a los juegos y comer pizza. Si es miercoles y tenemos entre 20 y 40 soles podemos comer un Pollo Frito y si tenemos mas de 40 soles podemos comer una megasalchipapa. Para los demas dias indicar que no se tiene planeado nada. Hacer hasta que la opcion ingresada sea SALIR

dia = input("Ingrese el dia de la semana: ")
while (dia != "SALIR"):
    monto = int(input("Ingrese el monto disponible: "))
    if (dia== "Lunes"):
        if (monto >=20) and (monto <=50):
            print("Puedes ir al cine")
        elif (monto >50):
            print("Puedes ir a comer un pollo ala brasa")
        else:
            print("No te alcanza para ninguna de las alternativas")
    elif (dia== "Martes"):
        if (monto >= 15) and (monto <=30):
            print("Puedes comer una pizza 2x1")
        elif (monto > 30) and (monto <=50):
            print("Puedes ir a los juegos mecanicos")
        elif (monto > 50):
            print("Puedes ir a los juegos y comer pizza")
        else:
            print("No te alcanza para ninguna de las alternativas")
    elif (dia == "Miercoles"):
        if (monto >= 20) and (monto <=40):
            print("Puedes comer un pollo frito")
        elif (monto>40):
            print("Puedes comer una megasalchipapa")
        else:
            print("No te alcanza para ninguna de las alternativas")
    else:
        print("No se tiene planeado nada")
    dia = input("Ingrese el dia de la semana: ")
print("Hasta luego")