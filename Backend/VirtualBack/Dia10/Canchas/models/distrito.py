from base_de_datos import bd
from .departamento import DepartamentoModel

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
    
    def guardar(self):
        bd.session.add(self)
        bd.session.commit()

    def retornarJson(self):
        return {
            'id': self.id,
            'nombre':self.descripcion,
        }

    def retornarJsonConDepartamento(self):
        dep = DepartamentoModel.query.filter_by(id=self.departamento).first()
        return {
            'id': self.id,
            'nombre':self.descripcion,
            'departamento':{
                'id':dep.id,
                'nombre': dep.descripcion
            }
        }