# una clase es un conjunto de metodos y atributos que sirven para reutilizar el codigo
class Mueble:
    # atributos que solamente van a existir dentro de la clase 
    # una variable se vuelve atributo cuando se crea dentro de la clase
    color = "Verde"
    nro_patas = 6

# Crear una instancia de la clase, va a asumir todos los atributos y metodos de esa clase
silla = Mueble()
print("Color silla: ",silla.color)
print("Nro de patas silla: ",silla.nro_patas)
sillon = Mueble()
silla.nro_patas = 4
print("Nro de patas sillon: ",sillon.nro_patas)
sofacama = Mueble()
print("Nro de patas sofacama: ",sofacama.nro_patas)
print("Nro de patas silla: ",silla.nro_patas)
