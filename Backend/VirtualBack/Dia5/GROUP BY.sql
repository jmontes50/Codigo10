# CREAR UNA BASE DE DATOS DE UNA PLAYA DE ESTACIONAMIENTO, EN EL
# CUAL SE GUARDEN LOS VEHICULOS QUE INGRESARON Y TENER UN REGISTRO
# DE VEHICULOS, UNA TABLA VEHICULOS DEBE TENER SU ID, PLACA, MARCA
# AÑO, MODELO Y COLOR, TAMBIEN LA PLAYA DE ESTACIONAMIENTO TIENE
# 3 LUGARES, UNO EN LA AV LA PAZ 505, OTRO EN LA CALLE PAUCARPATA 
# 702 Y OTRO EN LA AV PROGRESO 1050 POR LO QUE SE DEBE TENER UNA
# TABLA PLAYA CON SU ID, SU DIRECCION Y LA CANTIDAD DE ESPACIOS.
# LA BD SE DEBE LLAMAR PLAYITAS_CUARENTENA 
CREATE DATABASE IF NOT EXISTS PLAYITAS_CUARENTENA;
USE PLAYITAS_CUARENTENA;
CREATE TABLE IF NOT EXISTS t_vehiculo(
	vehi_id int primary key not null auto_increment,
    vehi_placa varchar(7) unique not null,
    vehi_marca varchar(25) not null,
    vehi_anio year,
    vehi_modelo varchar(25) not null,
    vehi_color varchar(45)
);
CREATE TABLE IF NOT EXISTS t_lugar(
	lug_id int primary key not null auto_increment,
    lug_direccion varchar(50) unique not null,
    lug_cantidad int
);
CREATE TABLE IF NOT EXISTS t_registro(
	reg_id int primary key not null auto_increment,
    reg_hora_ingreso datetime,
    reg_hora_salida datetime,
    vehi_id int,
    lug_id int,
    foreign key (vehi_id) references t_vehiculo(vehi_id),
    foreign key (lug_id) references t_lugar(lug_id)
);
# ingresa 5 vehiculos
INSERT INTO t_vehiculo 	(vehi_placa, vehi_marca, vehi_modelo, vehi_color, vehi_anio) VALUES
						('A2U-456','TOYOTA','HILUX','ROJO',2006),
                        ('V5T-664','KIA','PICANTO','PLOMO RATA',2013),
                        ('A5B-665','VOLKWAGEN','SIROCCO','BLANCO PERLA',2017),
                        ('455345','HONDA','STORM','PLOMO',2013),
                        ('258149','BRONCO','A5J','AMARILLA',2008);
#INSERT INTO T_VEHICULO 	(vehi_placa, vehi_marca, vehi_modelo, vehi_color, vehi_anio) VALUES
#						('A2U-456','TOYOTA','HILUX','ROJO',2006);
# ingresa 3 playas
INSERT INTO T_LUGAR (lug_direccion, lug_cantidad) VALUES
					('AV LA PAZ 505', 50),
                    ('CALLE PAUCARPATA 702', 20),
                    ('AV PROGRESO 1050', 41);

INSERT into t_registro 	(reg_hora_ingreso, reg_hora_salida, vehi_id, lug_id) VALUES
						('2020-03-01 14:50:30','2020-03-01 17:20:15',1,1),
                        ('2020-03-10 10:25:15','2020-03-10 12:15:15',3,2),
                        ('2020-03-15 11:50:30','2020-03-15 18:45:25',2,3),
                        ('2020-03-16 08:10:18','2020-03-16 10:58:48',5,2),
                        ('2020-03-16 18:50:30','2020-03-16 20:08:26',4,3),
                        ('2020-03-20 20:05:17','2020-03-20 21:16:09',1,1);

# Se desea saber la cantidad de veces que un vehiculo a ingresado a cualquiera de las tres
# playas
# SE USA COUNT()
# hay algunos metodos que EXCLUSIVAMENTE SE USAN EN UNA CONDICION DE AGRUPAMIENTO
# GROUP BY

select vehi_placa Placa, count(vehi_placa) as "Total de veces"
from t_registro as A inner join t_vehiculo as B on A.vehi_id = B.vehi_id
group by vehi_placa;


