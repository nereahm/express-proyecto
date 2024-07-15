const express = require("express");
const path = require("path");
const cors = require("cors");
const bunyan = require("bunyan"); // Módulo para logging
require('dotenv').config(); // Para cargar variables de entorno

// Importación de los enrutadores
const gatosRouter = require('./routes/gatos-router');
const perrosRouter = require('./routes/perros-router');
const usuariosRouter = require('./routes/usuarios-router');

const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Middleware para parsear datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos (las imagenes) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Asociación de los enrutadores a las rutas específicas
app.use('/gatos', gatosRouter); 
app.use('/perros', perrosRouter); 
app.use('/usuarios', usuariosRouter);

// Configuración del logger utilizando Bunyan
const logger = bunyan.createLogger({ name: "Servidor" });

// Middleware para manejar errores 404 (no encontrado)
app.use((req, res, next) => {
  const error = new Error(`No se encontró la ruta solicitada: ${req.originalUrl}`);
  logger.warn(error.message);
  res.status(404).json({ error: 'Not Found' });
});

// Middleware para manejar errores 500 (error interno del servidor)
app.use((err, req, res, next) => {
  logger.error(`Error en la aplicación: ${err.message}`);
  res.status(500).json({ error: 'Algo salió mal, intenta nuevamente más tarde.' });
});

// Definición del puerto en el que escuchará el servidor
let puerto = process.env.PORT || 3000;

// Inicio del servidor, escuchando en el puerto especificado
app.listen(puerto, () => {
  logger.info("Servidor levantado"); // Mensaje de log cuando el servidor se inicia correctamente
});
