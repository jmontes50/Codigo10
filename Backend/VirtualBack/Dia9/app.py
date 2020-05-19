from controllers import app
from flask_cors import CORS
# HABILITA LAS CORS PARA TOODOS LOS DOMINIOS, ABSOLUTAMENTE TODOS!
CORS(app)
# SI NOSOTROS QUEREMOS HABILITAR SOLAMENTE UNA SUBCATEGORIA DE NUESTRA API TENEMOS QUE INDICAR EL RECURSO Y QUE ORIGENES VAN A SER ACCESIBLES A ELLOS
# CORS(app,resource={r"/vehiculos/*":{"origins":"google.com"}})
if __name__ =='__main__':
    app.run(debug=True)