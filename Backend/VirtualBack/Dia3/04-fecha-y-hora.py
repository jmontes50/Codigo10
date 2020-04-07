from datetime import datetime

fecha_hora = datetime.now()
print(fecha_hora)
print(fecha_hora.year)
print(type(fecha_hora))
print(fecha_hora.month)
print(fecha_hora.minute)
print(fecha_hora.microsecond)
# YYYY/MM/DD
formatoYYYYMMDD = str(fecha_hora.year)+'/'+str(fecha_hora.month)+'/'+str(fecha_hora.day)
print(formatoYYYYMMDD)