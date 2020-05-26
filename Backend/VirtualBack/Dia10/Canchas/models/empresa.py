from base_de_datos import bd

class EmpresaModel(bd.Model):
    # Yo al heredar la clase Model todo lo que defina como atributos van a ser columnas de una tabla y la clase va a ser una tabla de la bd
    # si no especifico el nombre de la tabla, el nombre por defecto sera el nombre de la clase, si yo no quiero ese nombre y quiero uno diferente, uso el atributo __tablename__
    __tablename__ ="t_empresa"
    # https://docs.sqlalchemy.org/en/13/core/type_basics.html?highlight=datatypes
    id = bd.Column('emp_id',bd.Integer, primary_key=True)
    nombre = bd.Column('emp_nom', bd.String(45))
    latitud =bd.Column('emp_lat', bd.DECIMAL(10,8))
    longitud = bd.Column('emp_lng', bd.DECIMAL(10,8))
    foto = bd.Column('emp_foto', bd.Text)
    fono = bd.Column('emp_fono', bd.String(15))
    direccion = bd.Column('emp_dir', bd.String(50))
    # RELACIONES
    distrito = bd.Column('distrito_id', bd.Integer, bd.ForeignKey('t_distrito.distrito_id'), nullable=False)

    def __init__(self, nombre, latitud, longitud, foto, fono, dir, dist_id):
        self.nombre = nombre
        self.latitud = latitud
        self.longitud = longitud
        self.foto = foto
        self.fono = fono
        self.direccion = dir
        self.distrito = dist_id

