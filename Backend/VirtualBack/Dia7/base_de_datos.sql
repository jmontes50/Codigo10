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
doc_id int ,
amb_id int,
foreign key (doc_id) references t_docente(doc_id),
foreign key (amb_id) references t_ambiente(amb_id)
);

# Para agregar una nueva columna dentro de una tabla ya creada
alter table t_tipo add tipo_est tinyint;
alter table t_pabellon add pab_est tinyint;
alter table t_docente add doc_est tinyint;

# Para indicar que si no se ingresa un estado a esta columna, su estado por defecto va a ser true
alter table t_tipo alter tipo_est set default true;
alter table t_pabellon alter pab_est set default true;
alter table t_docente alter doc_est set default true;