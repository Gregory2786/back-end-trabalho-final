const express = require('express');
const cors = require('cors');
const conectarDB = require('./db');

const comidaRoutes = require('./routes/comida');
const bebidaRoutes = require('./routes/bebida');
const pedidoRoutes = require('./routes/pedido');

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
conectarDB();

// Usar rotas
app.use('/api', comidaRoutes);
app.use('/api', bebidaRoutes);
app.use('/api', pedidoRoutes);

// Configuração do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
