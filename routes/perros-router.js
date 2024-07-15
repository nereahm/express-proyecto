const express = require("express");

const perrosController = require("../controllers/perros-controller");

const router = express.Router();


// Ruta GET '/' para obtener todos los perros
router.get('/', perrosController.getPerros);

// Ruta GET '/ultimos' para obtener los últimos perros
router.get('/ultimos', perrosController.getUltimosPerros);

// Ruta POST '/' para añadir un nuevo perro
router.post('/', perrosController.nuevoPerro);

// Ruta DELETE '/' para eliminar un perro por su id
router.delete("/", perrosController.deletePerro);

// Ruta PUT '/' para actualizar un perro
router.put("/", perrosController.updatePerro);

// Ruta GET '/id' para obtener un perro por su id
router.get("/id", perrosController.getPerroById);

module.exports = router;
