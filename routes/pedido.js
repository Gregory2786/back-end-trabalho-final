const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rota para criar pedido
router.post('/', pedidoController.create);

// Rota para listar pedidos
router.get('/', pedidoController.getAll);

// Rota para atualizar pedido
router.put('/:id', pedidoController.update);

// Rota para deletar pedido
router.delete('/:id', pedidoController.delete);

module.exports = router;
