const db = require('../utils/db');

const findUserByCorreo = (correo, callback) => {
  db.query(
    'SELECT id, correo, contrasena, rol FROM usuarios WHERE correo = ?',
    [correo],
    (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    }
  );
};

module.exports = { findUserByCorreo };