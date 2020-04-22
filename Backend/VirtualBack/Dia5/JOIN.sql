# CREACION DE LA BASE DE DATOS
create database restauranteCodigo10;
# USAR LA BASE DE DATOS
use restauranteCodigo10;
# CREAR LAS TABLAS
create table t_categoria(
	cat_id int not null auto_increment primary key,
    cat_nombre varchar(20) not null
);
create table t_plato(
	pla_id int primary key auto_increment not null,
    pla_nombre varchar(30) not null,
    pla_precio decimal(5,2) not null,
    cat_id int,
    foreign key (cat_id) references t_categoria(cat_id)
);

insert into t_categoria (cat_nombre) values 
						('Entradas'),
                        ('Postres'),
                        ('Bebidas');
SELECT * from t_categoria;

insert into t_plato (pla_nombre, pla_precio, cat_id) values
					('Escribano', 4.80, 1),
                    ('Tocino del cielo', 6.20, 2),
                    ('Cerveza helada', 3.80, 3),
                    ('Keke marmoleado', 1.20, 2),
                    ('Chupe de camaron', 20.00, null);


select * from t_plato;


# UTILIZAR INNER JOIN
# INNER JOIN == JOIN (es lo mismo) 
# inner join hace que nos devuelva la interseccion de dos o mas tablas
select * from t_plato as A inner join t_categoria as B 
on A.cat_id = B.cat_id;

# LEFT JOIN
select * from t_plato as A LEFT JOIN t_categoria as B
on A.cat_id = B.cat_id;

insert into t_categoria (cat_nombre) values ('Platos de fondo');

# RIGHT JOIN
select * from t_plato as A RIGHT JOIN t_categoria as B 
on A.cat_id = B.cat_id;

# FULL OUTER JOIN
select * from t_plato as A left join t_categoria as b
on a.cat_id = b.cat_id UNION
select * from t_plato as a right join t_categoria as b
on a.cat_id = b.cat_id;
