const conexion = require('../database'); // Conecta con la base de datos

const usuariosController = {
  // Verifica un usuario por nombre de usuario y contraseña
  checkUsuario(req, res, next) {
    // Obtener nombre de usuario y contraseña desde los parámetros de la solicitud
    let nombre = req.query.nombre;
    let contrasena = req.query.contrasena;

    // Comando SQL para buscar un usuario por nombre y contraseña
    let comando = 'SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?';

    conexion.query(comando, [nombre, contrasena], (err, resultados) => {
      if (err) {
        // Pasar el error al middleware de manejo de errores
        return next(err);
      }
      // Devolver los resultados de la consulta en formato JSON
      res.json(resultados);
    });
  }
};

module.exports = usuariosController;
