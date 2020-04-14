class Persona:
    # el constructor en python se declara por medio de un metodo preestablecido __init__ (metodo magico) que significa inicializacion, sirve para declarar los atributos de la clase (para inicializarlos) y que seran usados en toda la clase
    
    # self => es la referencia a la clase para acceder a todos sus atributos y metodos, en comparativa con javascript es el this, siempre va al comienzo de cualquier metodo de la clase OBLIGATORIAMENTE
    def __init__(self, nombre, ed):
        self.nombre = nombre
        self.edad = ed
    # CREAR ALGUNOS METODOS EXTRAS
    def saludar (self):
        """Metodo que no recibe parametros pero que hace una impesion de pantalla con los atributos de la clase"""
        # print(f"Hola {self.nombre} tienes {self.edad} años")
        print("Hola {} tienes {} años".format(self.nombre, self.edad))

persona1 = Persona("Eduardo",27)
# print(persona1.edad)
# persona1.saludar()
# El metodo init es lo mismo que crear una instancia de la clase
persona1.__init__("Alejandro",35)
# persona1.saludar()

# EJERCICIO 
# Crear una clase llamada Alumno que reciba en su constructor el nombre, su fecha de nacimiento y cursos que va a ser una lista vacía y por medio de un menu ingresa: 
# 1. Un nuevo curso
# 2. Mostrar los cursos
# 3. Mostrar su edad
# 4. Salir, 
# ademas de un metodo que nos diga cuantos años tiene en base a su fecha de nacimiento
# PISTA => el menu no es parte de la clase 

from datetime import datetime
class Alumno:
    def __init__(self, nombre, fecnac, cursos):
        self.nombre = nombre
        self.fecnac = fecnac
        self.cursos = cursos

    def agregar_curso(self, nombre_curso):
        self.cursos.append(nombre_curso)
        return 'Se agrego el curso exitosamente'

    def mostrar_cursos(self):
        for curso in self.cursos:
            print("*",curso)
    
    def mostrar_edad(self):
        anio = int(self.fecnac[:4])
        anio_actual = int(datetime.now().year)
        edad = anio_actual - anio
        return edad


nombre = input('Ingrese su nombre: ')
fecha_nacimiento = input('Ingrese su fecha de nacimiento YYYY-MM-DD: ')
cursos = []
objAlumno = Alumno(nombre, fecha_nacimiento, cursos)
while True:
    print('1. Nuevo curso \n2. Mostrar los cursos \n3. Mostrar su edad \n4. Salir')
    opcion = int(input('Ingrese la opcion: '))
    if opcion==1:
        curso = input('Ingrese el nombre del curso: ')
        respuesta = objAlumno.agregar_curso(curso)
        print(respuesta)
    elif opcion == 2:
        print('Los cursos son')
        objAlumno.mostrar_cursos()
    elif opcion == 3:
        print('Su edad es:', objAlumno.mostrar_edad(), 'años')
    else:
        print('Adios')
        break