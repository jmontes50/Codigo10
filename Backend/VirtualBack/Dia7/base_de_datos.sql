create database if not exists instituto;
use instituto2;
create table if not exists t_docente(
doc_id int primary key not null auto_increment,
doc_nombre varchar(45),
doc_apellido varchar(45),
doc_cod varchar(5),
doc_especialidad varchar(20)
);
create table if not exists t_tipo(
tipo_id int primary key not null auto_increment,
tipo_nombre varchar(45)
);
create table if not exists t_pabellon(
pab_id int not null primary key auto_increment,
pab_nombre varchar(45)
);
create table if not exists t_ambiente(
amb_id int not null primary key auto_increment,
amb_nombre varchar(45),
amb_capacidad int,
tipo_id int,
pab_id int,
foreign key (tipo_id) references t_tipo(tipo_id),
foreign key (pab_id) references t_pabellon(pab_id)
);
create table if not exists t_reserva(
res_id int primary key not null auto_increment,
res_fecha_inicio datetime,
res_fecha_fin datetime,
doc_id int,
amb_id int,
foreign key (doc_id) references t_docente(doc_id),
foreign key (amb_id) references t_ambiente(amb_id)
);


