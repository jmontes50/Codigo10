# Esto es un comentario
# Tipos de datos
# https://dev.mysql.com/doc/refman/8.0/en/data-types.html

# Numericos ( Los mas importantes)
# int: enteros que aceptan valores desde -2147483648 hasta el 2147483647
# tinyint: Generalmente se usa para los booleanos (1 = V ; 0 = F) 
# 			admite valores que van desde -128 a 127
# smallint: -32768 a 32767
# float(t,d): 	t => total de digitos que vamos a tener (parte decimal mas parte entera)
#				d => la cantidad de decimales que va a contener

# TIEMPO Y FECHA:
# date: su formato es YYYY-MM-DD desde 1000-01-01 hasta el 9999-12-31
# datetime: su formato es YYYY-MM-DD HH:MM:SS.mmmm
# timestamp: que no utiliza guiones ni dos puntos su formato es YYYYMMDDHHMMSSSS
# time: almacena unicamente HH:MM:SS

# STRING
# char(l): atributo que admite caracteres y va entre parentesis la longitud de caracteres
#			maximos a almacenar
# varchar(l): este atributo lo que hace es separa espacio de memoria dinamicamente, es decir
#				si se pone una longitud maxima de 30 caracteres pero solo se ingresa algo menor
#				solamente va a usar el espacio de memoria para la cantidad de caracteres ingresados
#				NOTA: SU LONGITUD ES SU LONGITUD MAXIMA (no puedo ingresar un texto con mayor longitud
#				QUE LA DEFINIDA)
# text:	es un tipo de atributo con un maximo dinamico de 65535 caracteres, generalmente se usa para
#		url, password, hash, y parrafos muy extensos.


# ----------- CREACION DE TABLAS --------------
# Para nosotros crear una tabla necesitamos saber:
# * El nombre de la tabla
# * Sus atributos
# * La definicion de cada atributo (Tipo de dato, usabilidad, entre otros)

# EJEMPLO
# CREATE TABLE nombre_tabla ( nombre_atributo tipo_dato, nombre_atributo2 tipo_dato_atr_2...)
# aparte de definir el nombre y el tipo DEL ATRIBUTO se pueden añadir opciones extras, como x ejemplo:
# NOT NULL => eso va a permitir que cuando queramos ingresar o editar un registro no podramos dejarla en blanco o nula
# AUTO_INCREMENT => eso va de la mano si es una columna de tipo int  y va a autoincrementarse de uno en uno
# 					NOTA: GENERALMENTE SE USA PARA LOS CAMPOS QUE VAN A SER PRIMARY KEY (PK)
# PRIMARY KEY => es usado para definir que atributo de la tabla va a ser la encargada de representar 
#				a todo ese registro, es por medio de la cual en sus relaciones va a ser la representante

# Para tener una tabla, primero tenemos que decir donde se va a crear esa tabla (en que Base de Datos)
# CREATE DATABASE nombre_bd
# CREATE SCHEMA nombre_bd
create database prueba_codigo10;
# Para alternar entre el uso de bases de datos en un mismo servidor se utiliza la palabra USE nombre_bd
use prueba_codigo10;
create table persona(
	id int primary key auto_increment,
    nombre varchar(50),
    apellido varchar(20)
);
# para ejecutar parte del SCRIPT (es el archivo que usan las bases de datos) se selecciona
# el texto a ejecutar y se utiliza el comando Ctrl+Enter o hacer click en el rayo con el cursor

# La forma de eliminar por completo (incluyendo sus datos) es
# DROP TABLE nombre_tabla
# NOTA: NO se puede eleiminar una tabla que tenga una relacion de herencia (osea que sea padre de otras),
# primero se elimina a los hijos y luego recien al padre
DROP TABLE persona;

# Para ver que tablas tenemos en nuestra Base de datos usamos el comando show tables;
show tables;

# INSERCION
# INSERT INTO nombre_tabla (campo1, campo2, ....) VALUES (valor1, valor2, valor3,....)
INSERT into persona (nombre, apellido) VALUES ('Eduardo', 'de Rivero');
iNsErT into persona (nombre, apellido) values 
					('Juan','Perez'),
                    ('Rosa','Zegarra'),
                    ('Nadia','Gutierrez');
                    
# Para visualizar el contenido de una tabla se usa el siguiente comando
# SELECT nombre_campo1, nombre_Campo2,..... FROM nombre_tabla
# NOTA: SI quiero traer TODOS los campos de la tabla utilizo un *
SELECT * from persona;

