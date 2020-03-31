# Manejar una excepsion ayuda a que el programa no colapse y no se cuelgue tratanto de generar una solucion para responder al usuario
# excepsiones => try ... except ... else ... finally
try:
    # todo lo que va a suceder dentro del try y si hay algun error, ese error no va a detener el programa
    numero1 = int(input("Ingrese el numero 1: "))
    numero2 = int(input("Ingrese el numero 2: "))
    division = numero1 / numero2
    print(division)
except ZeroDivisionError:
    # Si hay alguna division entre 0 va a entrar al except
    print("No se puede divir entre 0")
except:
    # Si hay algun otro error desconocido y no especificado va a entrar a este except
    print("Se encontro un error, no se pudo hacer")
# else y finally => son opcionales, pueden ir como no pueden ir, muy por el contrario un try siempre va a acompañado de un except
else:
    # Va a suceder siempre y cuando no entro a ninguno de los except
    print("La division fue exitosa")
finally:
    # Va a suceder sin importar si entro o no a algun except
    print("Yo soy otra parte del codigo")
print("Yo soy otro proceso")

# Ejercicio
# Pedir dos numeros y multiplicar, si alguno de los es una letra volver a pedir hasta que los dos sean numeros
while (True):
    try:
        numero3 = int(input("Ingrese el numero 1:"))
        numero4 = int(input("Ingrese el numero 2:"))
        print("La multiplicacion es:",numero3*numero4)
        break
    except:
        print("No se puede ingresar texto, vuelva a intentar")
    # else:
    #     print("La multiplicacion es:",numero3*numero4)
    #     break
