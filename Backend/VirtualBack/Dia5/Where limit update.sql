use restaurantecodigo10;
# PARA ACTUALIZAR UNA FILA (ROW) YA ALMACENADA
select * from t_plato;
update t_plato set cat_id = 4 where pla_id = 5;

# WHERE
# es una clausula de condicion que sirve para filtrar los resultados
SELECT * FROM T_PLATO where cat_id=2;

# LIKE
# va a encontrar alguna coincidencia de texto y se usa el simbolo % para indicar
# que no necesariamente tiene que estar al comienzo
select * from t_categoria where cat_nombre like '%palabra%';

# LIMIT
# para restringir el total de rows devueltas
select * from t_plato limit 2;

# RESOLUCION EJERCICIO

select 	pla_id as '# plato', 
		pla_nombre Nombre, 
        pla_precio Precio, 
        cat_nombre as Categoria 
from t_plato inner join t_categoria 
on t_plato.cat_id = t_categoria.cat_id;


