const Pedido = require('./models/Pedido');
const Comer = require('../models/Comer');
const Beber = require('../models/Beber');

// Criar pedido
exports.create = async (req, res) => {
  try {
    const { nomePessoa, mesa, comida, bebida } = req.body;

    // Verifica se comida e bebida existem
    const comidaExiste = await Comer.findById(comida);
    const bebidaExiste = await Beber.findById(bebida);

    if (!comidaExiste || !bebidaExiste) {
      return res.status(400).json({ error: 'Comida ou bebida não encontrada!' });
    }

    const novoPedido = new Pedido({ nomePessoa, mesa, comida, bebida });
    await novoPedido.save();

    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido!' });
  }
};

// Listar pedidos
exports.getAll = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('comida').populate('bebida');
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos!' });
  }
};

// Atualizar pedido
exports.update = async (req, res) => {
  try {
    const { nomePessoa, mesa, comida, bebida } = req.body;

    // Verifica se comida e bebida existem
    if (comida) {
      const comidaExiste = await Comer.findById(comida);
      if (!comidaExiste) return res.status(400).json({ error: 'Comida não encontrada!' });
    }
    if (bebida) {
      const bebidaExiste = await Beber.findById(bebida);
      if (!bebidaExiste) return res.status(400).json({ error: 'Bebida não encontrada!' });
    }

    const pedidoAtualizado = await Pedido.findByIdAndUpdate(
      req.params.id,
      { nomePessoa, mesa, comida, bebida },
      { new: true }
    );

    if (!pedidoAtualizado) {
      return res.status(404).json({ error: 'Pedido não encontrado!' });
    }

    res.json(pedidoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pedido!' });
  }
};

// Deletar pedido
exports.delete = async (req, res) => {
  try {
    const pedidoRemovido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoRemovido) {
      return res.status(404).json({ error: 'Pedido não encontrado!' });
    }
    res.json({ message: 'Pedido removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pedido!' });
  }
};
