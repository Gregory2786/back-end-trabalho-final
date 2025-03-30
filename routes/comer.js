const express = require('express');
const router = express.Router();
const comidaController = require('../controllers/comidaController');

// Rota para criar comida
router.post('/', comidaController.create);

// Rota para listar comidas
router.get('/', comidaController.getAll);

// Rota para atualizar comida
router.put('/:id', comidaController.update);

// Rota para deletar comida
router.delete('/:id', comidaController.delete);

module.exports = router;
