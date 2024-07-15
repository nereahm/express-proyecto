const mysql = require('mysql'); // Importa el módulo MySQL
const bunyan = require('bunyan'); 

const logger = bunyan.createLogger({ name: 'Base de datos' }); // Crea un logger llamado 'Base de datos'

// Configuración de la conexión a la base de datos utilizando variables de entorno
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE 
});

// Intenta conectar con la base de datos
try {
    conexion.connect((err) => {
        if (err) {
            throw err; // Si hay un error en la conexión, lanza error
        }
        logger.info('Conectado a la BD satisfactoriamente'); // Si todo va bien manda mensaje conectado satisfactoriamente
    });
} catch (error) {
    logger.error('Error en la conexión ' + error); // error si hay un problema en la conexión
}

module.exports = conexion; 
