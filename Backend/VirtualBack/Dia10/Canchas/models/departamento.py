from base_de_datos import bd

class DepartamentoModel(bd.Model):
    __tablename__="t_departamento"
    id = bd.Column('dep_id',bd.Integer, primary_key=True)
    descripcion = bd.Column('dep_desc',bd.String(45), unique=True)

    # ESTO NO CREA UNA RELACION 
    distritos = bd.relationship('DistritoModel', backref='distrito')
    # https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/#one-to-many-relationships
    # el parametro lazy puede admitir distintos valores
    # 'select'/True => valor x defecto. para cargar la data de su hijo
    # 'joined'/False => es como usar un inner join cuando vamos a hacer el select
    # 'subquery' => es muy parecido al joined pero x detras usar una subquery para jalar los datos de su hijo
    # 'dynamic' => returna los objetos del join de la consulta
    
    def __init__(self, desc):
        self.descripcion = desc
    
    def __str__ (self):
        return 'id:{} nombre:{}'.format(self.id,self.descripcion)
    
    def retornarJson(self):
        return {
            'id': self.id,
            'nombre':self.descripcion
        }

    def guardar(self):
        bd.session.add(self)
        bd.session.commit()
    
    def actualizar_departamento(self,nueva_desc):
        self.descripcion = nueva_desc
        bd.session.commit()