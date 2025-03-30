const Beber = require('../models/Beber');

// Criar bebida
exports.create = async (req, res) => {
  try {
    const { name, img, price, ingredientes } = req.body;
    const novaBebida = new Beber({ name, img, price, ingredientes });
    await novaBebida.save();
    res.status(201).json(novaBebida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar bebida!' });
  }
};

// Listar bebidas
exports.getAll = async (req, res) => {
  try {
    const bebidas = await Beber.find();
    res.json(bebidas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar bebidas!' });
  }
};

// Atualizar bebida
exports.update = async (req, res) => {
  try {
    const { name, img, price, ingredientes } = req.body;
    const bebidaAtualizada = await Beber.findByIdAndUpdate(
      req.params.id,
      { name, img, price, ingredientes },
      { new: true }
    );
    res.json(bebidaAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar bebida!' });
  }
};

// Deletar bebida
exports.delete = async (req, res) => {
  try {
    await Beber.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bebida removida com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar bebida!' });
  }
};