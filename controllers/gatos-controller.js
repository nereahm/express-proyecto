const conexion = require("../database");

const gatosController = {
  getGatos(req, res, next) {
    let comando = "SELECT * FROM gatos";
    conexion.query(comando, (err, resultados, campos) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json(resultados);
    });
  },

  getGatoById(req, res, next) {
    const id_animal = req.query.id_animal;
    let comando = 'SELECT * FROM gatos WHERE id_animal = ?';
    conexion.query(comando, [id_animal], (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json(resultado[0]);
    });
  },

  nuevoGato(req, res, next) {
    const { nombre, descripcion, raza, edad, genero } = req.body;
    let comando = 'INSERT INTO gatos (nombre, descripcion, raza, edad, genero) VALUES (?, ?, ?, ?, ?)';
    conexion.query(comando, [nombre, descripcion, raza, edad, genero], (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(201).json({ status: "okay" });
    });
  },

  updateGato(req, res, next) {
    const { id_animal, nombre, descripcion, raza, edad, genero } = req.body;
    let comando = 'UPDATE gatos SET nombre = ?, descripcion = ?, raza = ?, edad = ?, genero = ? WHERE id_animal = ?';
    conexion.query(comando, [nombre, descripcion, raza, edad, genero, id_animal], (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json({ status: "okay" });
    });
  },

  deleteGato(req, res, next) {
    let id_animal = req.query.id_animal;
    let comando = 'DELETE FROM gatos WHERE id_animal = ?';
    conexion.query(comando, [id_animal], (err, resultados, campos) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json({ status: "Ok" });
    });
  },
};

module.exports = gatosController;
