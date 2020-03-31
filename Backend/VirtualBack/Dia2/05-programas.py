# añadir un modulo
# los modulos no pueden comenzar ni con numeros ni con caracteres especiales
import modulo
modulo.saludar("Eduardo")
modulo.despedir("Juan")

# from nombre_modulo import metodo/clase
from modulo import saludar, despedir
saludar("Maria")
despedir("Roberto")

# Mediante el comando as se pone un alias al metodo importado para usarlo con otro nombre diferente en su funcionamiento
from modulo import despedir as adiocito
adiocito("Santiago")