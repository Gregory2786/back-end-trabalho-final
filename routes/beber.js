const express = require('express');
const router = express.Router();
const beberController = require('../controllers/beberController');

// Rota para criar bebida
router.post('/', beberController.create);

// Rota para listar bebidas
router.get('/', beberController.getAll);

// Rota para atualizar bebida
router.put('/:id', beberController.update);

// Rota para deletar bebida
router.delete('/:id', beberController.delete);

module.exports = router;
