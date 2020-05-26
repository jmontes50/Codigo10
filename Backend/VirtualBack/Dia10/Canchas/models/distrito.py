from base_de_datos import bd

class DistritoModel(bd.Model):
    __tablename__="t_distrito"
    id = bd.Column('distrito_id',bd.Integer,primary_key=True)
    descripcion = bd.Column('distrito_desc', bd.String(45), nullable=False)
    # RELACIONES
    departamento = bd.Column('dep_id', bd.Integer, bd.ForeignKey('t_departamento.dep_id'),nullable=False)
    # RELACION INVERSA
    empresas = bd.relationship('EmpresaModel',backref='empresa')

    def __init__(self, desc, dep_id):
        self.descripcion = desc
        self.departamento = dep_id