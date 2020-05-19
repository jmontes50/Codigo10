from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'playasCodigo10'
app.config['MYSQL_PORT']= 3306
 
mysql = MySQL(app)

@app.before_first_request
def inicializar_tablas():
    print('se ejecuto el first request')
    cur = mysql.connection.cursor()
    query_crear_tablas = """
    CREATE TABLE IF NOT EXISTS T_PLAYA(
        PLAYA_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        PLAYA_NOM VARCHAR(45),
        PLAYA_LAT DECIMAL(10,7),
        PLAYA_LNG DECIMAL(10,7),
        PLAYA_DIR VARCHAR(30)
    );
    CREATE TABLE IF NOT EXISTS T_USUARIO(
        USU_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        USU_EMAIL VARCHAR(45),
        USU_HASH TEXT,
        USU_SALT TEXT,
        USU_TIPO VARCHAR(1),
        USU_NOMBRE VARCHAR(45),
        USU_APELLIDO VARCHAR(45)
    );
    CREATE TABLE IF NOT EXISTS T_CLIENTE(
        CLIENTE_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        CLIENTE_NOM VARCHAR(45),
        CLIENTE_APE VARCHAR(45),
        CLIENTE_EMAIL VARCHAR(45)
    );
    CREATE TABLE IF NOT EXISTS T_VEHICULO(
        VEH_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        VEH_PLACA VARCHAR(10),
        VEH_MODELO VARCHAR(45),
        VEH_MARCA VARCHAR(45),
        VEH_COLOR VARCHAR(45),
        CLIENTE_ID INT,
        FOREIGN KEY (CLIENTE_ID) REFERENCES T_CLIENTE(CLIENTE_ID)
    );
    CREATE TABLE IF NOT EXISTS T_CONTROL(
        CONTROL_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        CONTROL_FECHA DATE,
        CONTROL_HR_INGRESO TIME,
        CONTROL_HR_SALIDA TIME,
        PLAYA_ID INT,
        VEH_ID INT,
        USU_ID INT,
        FOREIGN KEY (PLAYA_ID) REFERENCES T_PLAYA(PLAYA_ID),
        FOREIGN KEY (VEH_ID) REFERENCES T_VEHICULO(VEH_ID),
        FOREIGN KEY (USU_ID) REFERENCES T_USUARIO(USU_ID)
    )
    """
    cur.execute(query_crear_tablas)
    cur.close()
