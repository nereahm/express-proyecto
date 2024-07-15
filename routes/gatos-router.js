const express = require("express");

// Importar el controlador de gatos
const gatosController = require("../controllers/gatos-controller");

const router = express.Router();

// Define las rutas y las asocia a los métodos correspondientes 

// Ruta GET '/' para obtener todos los gatos
router.get('/', gatosController.getGatos);

// Ruta POST '/' para añadir un nuevo gato
router.post('/', gatosController.nuevoGato);

// Ruta DELETE '/' para eliminar un gato por su id
router.delete("/", gatosController.deleteGato);

// Ruta PUT '/' para actualizar un gato
router.put("/", gatosController.updateGato);

// Ruta GET '/id' para obtener un gato por su id
router.get("/id", gatosController.getGatoById);

module.exports = router;
