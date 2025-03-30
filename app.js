require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./db');

const comidaRoutes = require('./routes/comidaRoutes');
const bebidaRoutes = require('./routes/beberRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
conectarDB();

// Usar rotas
app.use('/api/comidas', comidaRoutes);
app.use('/api/bebidas', bebidaRoutes);
app.use('/api/pedidos', pedidoRoutes);

// Configuração do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
