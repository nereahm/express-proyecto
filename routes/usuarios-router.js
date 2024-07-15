const express = require('express');

// Importar el controlador de usuarios
const usuariosController = require('../controllers/usuarios-controller');

// Crear un enrutador de Express
const router = express.Router();

// Definir la ruta GET '/' que llama al método checkUsuario 
router.get('/', usuariosController.checkUsuario);

module.exports = router;
