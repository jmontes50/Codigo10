use restaurantecodigo10;
# PARA AGREGAR UNA NUEVA COLUMNA SE MODIFICA LA TABLA CON 
# ALTER TABLE 
# Y PARA AGREGAR SE USA ADD COLUMN nombre_columna tipo_columna
# OPCIONALMENTE se puede indicar en que posicion usando AFTER nombre_columna
# y si la queremos al inicio usamos el comando FIRST
alter table t_plato add column pla_disp bool after pla_precio;
select * from t_plato;

# PARA ELIMINAR UNA COLUMNA SIEMPRE Y CUANDO NO SEA PK
alter table t_plato drop column pla_disp;
select * from t_plato;

# PARA MODIFICAR UNA COLUMNA POR SU TIPO DE DATO O SUS RESTRICCIONES
alter table t_plato modify pla_nombre varchar(35);



