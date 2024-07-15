const conexion = require("../database");

const perrosController = {
  getPerros(req, res, next) {
    let comando = "SELECT * FROM perros";
    conexion.query(comando, (err, resultados, campos) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json(resultados);
    });
  },

  // Obtiene los 3 últimos perros que tengan mayor edad, ya que son los mas difíciles de adoptar
  getUltimosPerros(req, res, next) {
    let comando = 'SELECT * FROM perros ORDER BY edad DESC LIMIT 3';
    conexion.query(comando, (err, resultados, campos) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json(resultados);
    });
  },

  nuevoPerro(req, res, next) {
    const { nombre, descripcion, raza, edad, genero, imagen } = req.body;
    let comando = 'INSERT INTO perros (nombre, descripcion, raza, edad, genero, imagen) VALUES (?, ?, ?, ?, ?, ?)';
    let valores = [nombre, descripcion, raza, edad, genero, imagen];

    conexion.query(comando, valores, (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json({ status: "okay" });
    });
  },

  getPerroById(req, res, next) {
    const id_animal = req.query.id_animal;
    let comando = 'SELECT * FROM perros WHERE id_animal = ?';
    conexion.query(comando, [id_animal], (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json(resultado[0]);
    });
  },

  updatePerro(req, res, next) {
    const { id_animal, nombre, descripcion, raza, edad, genero } = req.body;
    let comando = 'UPDATE perros SET nombre = ?, descripcion = ?, raza = ?, edad = ?, genero = ? WHERE id_animal = ?';
    conexion.query(comando, [nombre, descripcion, raza, edad, genero, id_animal], (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json({ status: "okay" });
    });
  },

  deletePerro(req, res, next) {
    const id_animal = req.query.id_animal;
    let comando = 'DELETE FROM perros WHERE id_animal = ?';
    conexion.query(comando, [id_animal], (err, resultado) => {
      if (err) {
        return next(err); // Pasa el error al middleware de manejo de errores
      }
      res.status(200).json({ status: "Ok" });
    });
  }
};

module.exports = perrosController;
