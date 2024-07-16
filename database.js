const mysql = require('mysql');
const bunyan = require('bunyan');
require('dotenv').config(); // Para cargar las variables de entorno

const logger = bunyan.createLogger({ name: 'Base de datos' }); // Crea un logger llamado 'Base de datos'

// Configuración de la conexión a la base de datos utilizando variables de entorno
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Intenta conectar con la base de datos
conexion.connect((err) => {
    if (err) {
        logger.error('Error en la conexión ' + err); // Loguea el error si hay un problema en la conexión
        throw err; // Lanza el error para detener la ejecución si hay un problema en la conexión
    }
    logger.info('Conectado a la BD satisfactoriamente'); // Loguea éxito de conexión si todo va bien
});

module.exports = conexion;
