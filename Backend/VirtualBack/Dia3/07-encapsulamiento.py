# El encapsulmiento sirve para proteger los atributos y metodos para que no puedan ser alterados o llamados afuera de la misma clase
class Automovil:
    def __init__(self,gas, aceite, temp, puertas, largo = 200, ancho = 130, enMarcha=False, motor=1500):
        self.largo = largo
        self.ancho = ancho
        self.enMarcha = enMarcha
        self.motor = motor
        self.__ruedas = 4 # asi se define un atributo privado
        self.gasolina = gas
        self.aceite = aceite
        self.temperatura = temp
        self.puertas = puertas
    
    def mostrarRuedas(self):
        print(self.__ruedas)

    def arrancar(self, estadoArrancar):
        self.enMarcha = estadoArrancar
        if (self.enMarcha):
            chequeo = self.__chequeo_interno()
        if (self.enMarcha and chequeo):
            print("El automovil esta en marcha sin ningun problema")
        elif (self.enMarcha and chequeo ==False):
            print("El automovil esta en marcha pero requiere atencion urgente")
        else:
            print("El automovil esta detenido")


    # encapsulamos el emtodo para que solo pueda ser llamado o invocado dentro de la clase
    def __chequeo_interno(self):
        if (self.gasolina > 20 and self.aceite=="Ok" and self.temperatura < 80 and self.puertas == "Abierta"):
            return True
        else:
            return False
    # Todo metodo es una funcion pero no toda funcion es un metodo
    # metodo : es una funcion que se va a ejecutar UNICAMENTE dentro de una clase
    # funcion: es un conjunto de ocdigo que se va a ejecutar siempre que se le invoque

# instanciar una clase === ejemplarizar una clase === crear un objeto
miAuto = Automovil(40,"Ok",20,"Cerradas",motor=2000)
print(miAuto.largo)
print(miAuto.__ruedas)
miAuto.mostrarRuedas()
# miAuto.__chequeo_interno()
miAuto.arrancar(True)


# EJERCICIO
# Crear una clase llamada Coordenadas y que va a tener como atributos X e Y, en su constructor se debe inicializar los valores y sino cualquiera de sus dos valores sera 0. Tener un metodo para ver cuales an sido los valores ingresados, ejemplo
# tener un metodo para ver en que cuadrante esta
#          |
#     2    |    1
#  ________|________
#          |       
#     3    |    4      
#          |
# (10,5)
# Sus valores son: x=10, y=5
# Esta en el cuadrante 1
# Tener un metodo otro_vector() que tome otras coordenadas y calcule su vector resultante ((x2-x1),(y2-y1))
# PLUS: Calcular la distancia entre los dos puntos => ((x2-x1)^2+(y2-y1)^2)^1/2, este debe ser un metodo privado que se ejecute cuando llamamos al metodo otro_vector()

