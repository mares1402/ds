const jwt = require('jsonwebtoken');
const { comparePassword } = require('../utils/hash');
const { findUserByCorreo } = require('../models/userModel');

const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  findUserByCorreo(correo, async (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'Usuario no encontrado' });

    const match = await comparePassword(contrasena, user.contrasena);
    if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: user.id, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  });
};

module.exports = { login };