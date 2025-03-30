const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedidoController');

// Criar Pedido
router.post('/pedidos', PedidoController.create);

module.exports = router;