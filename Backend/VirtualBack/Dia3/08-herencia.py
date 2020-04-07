class Vehiculos ():
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.andando = False
        self.acelera = False
        self.frena = False

    def arrancar(self):
        self.andando = True

    def acelerar(self):
        self.acelera = True

    def frenar(self):
        self.frena = True

    # Metodo magico str que sirve para sobreescribir lo que va a imprimir en el objeto cuando se imprima por pantalla
    def __str__(self):
        # el metodo str obligatoriamente retorna un string , no puede retornar otra cosa
        return "Marca:{} \nModelo: {} \nAndando: {} \nAcelerando: {} \nFrenando:{}".format(self.marca, self.modelo, self.andando, self.acelera, self.frena)


class Moto(Vehiculos):
    # La herencia se usa para usar absolutamente todos los atributos y metodos del padre
    hacer_caballito = ""
    # esta es otra forma de declarar los atributos

    def __init__(self, marca, modelo, hacer_caballito):
        self.hacer_caballito = hacer_caballito
        # super => con el metodo super se hace un llamado a los datos de mi padre como por ejemplo: su constructor
        super().__init__(marca, modelo)

    def caballito(self):
        self.hacer_caballito = "Estoy haciendo caballito"
    # sobreescribir el metodo __str__

    def __str__(self):
        return super().__str__()+"\nCaballito: {}".format(self.hacer_caballito)
        # return "Marca:{} \nModelo: {} \nAndando: {} \nAcelerando: {} \nFrenando:{} \nCaballito:{}".format(self.marca, self.modelo, self.andando, self.acelera, self.frena, self.hacer_caballito)


objVehiculo = Vehiculos("Kia", "Picanto")
print(objVehiculo)
print("")
objMoto = Moto("Honda", "Cr100", "Caballito")
objMoto.caballito()
objMoto.acelerar()
objMoto.arrancar()
print(objMoto)

# Tenemos una clase padre llamada Persona que tiene como constructor un nombre, edad, nacionalidad, dni y sobreescribir el metodo str para que diga lo siguiente: "Hola me llamo ____, tengo ___ años, soy ____ y mi DNI es ____", luego tener una clase hijo que sea Empleado que herede de Persona y que su constructor aparte de recibir los parametros anteriores reciba el salario y su antigüedad y que su metodo str aparte de lo anterior aumente lo sgte: "Trabajo hace _____ años y mi salario es de S/ _____"
class Persona():
    def __init__(self, nombre, edad, nacionalidad, dni):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad
        self.DNI = dni

    def __str__(self):
        return "Hola me llamo {}, tengo {} años, soy {} y mi DNI es {}".format(self.nombre, self.edad, self.nacionalidad, self.DNI)

class Empleado (Persona):
    def __init__(self, nombre_per, edad_per, nacionalidad_per, dni_per, salario, antiguedad):
        self.salario = salario
        self.antiguedad = antiguedad
        super().__init__(nombre_per,edad_per,nacionalidad_per,dni_per)
    
    def __str__(self):
        return super().__str__()+f" trabajo hace {self.antiguedad} años y mi salario es de S/ {self.salario}"
# Se recomienda que siempre datos como los DNI/CE, RUC, TELEFONOS sean almacenados de tipo texto 
persona1 = Persona("Juan",25,"Uruguayo", "74521869")
print(persona1)
empleado1 = Empleado("Ronald",30,"Peruano","29254782",1500.00,5)
print(empleado1)

# EJERCICIO
# Se tiene una clase Restaurante que tiene su razon social, direccion, ruc y una clase padre llamada Categoria que tiene su nombre de categoria, al momento de crear un restaurante debe tener una categoria

class Categoria : 
    def __init__(self, nombre):
        self.nombre = nombre
    def __str__(self):
        return f"Su categoria es: {self.nombre}"

class Restaurante(Categoria):
    def __init__(self, razon_soc, direccion, ruc, nombre_cat):
        self.razon_social = razon_soc
        self.direccion = direccion
        self.ruc = ruc
        super().__init__(nombre_cat)
    def __str__(self):
        return super().__str__()+f"\nSu razon social es: {self.razon_social} \nSu direccion es: {self.direccion} \nSu ruc es: {self.ruc}"

class Hijo(Restaurante):
    pass

objRestaurante = Restaurante("Don Pituco","Av Progreso 510","10259547582","Polleria")
print(objRestaurante)

# Al heredar otra clase de su Padre Restaurante va a heredar todo de su padre Restaurante incluyendo el metodo __str__ e __init__
objHijo = Hijo("raz soc","dir","ruc","categoria")
print(objHijo)