const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Aquí conecta con neon.com (PostgreSQL)
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "TU_URL_DE_NEON"
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Ejemplo: obtener productos del catálogo desde BD
app.get('/api/productos', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM productos');
  res.json(rows);
});

// TODO: más rutas para carrito, pedidos, chat, admin, etc.

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});