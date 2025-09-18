require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});