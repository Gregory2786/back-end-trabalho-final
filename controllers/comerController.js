const Comer = require('../models/Comer');

// Criar comida
exports.create = async (req, res) => {
  try {
    const { name, img, price, ingredientes } = req.body;
    const novaComida = new Comer({ name, img, price, ingredientes });
    await novaComida.save();
    res.status(201).json(novaComida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar comida!' });
  }
};

// Listar comidas
exports.getAll = async (req, res) => {
  try {
    const comidas = await Comer.find();
    res.json(comidas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar comidas!' });
  }
};

// Atualizar comida
exports.update = async (req, res) => {
  try {
    const { name, img, price, ingredientes } = req.body;
    const comidaAtualizada = await Comer.findByIdAndUpdate(
      req.params.id,
      { name, img, price, ingredientes },
      { new: true }
    );
    res.json(comidaAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar comida!' });
  }
};

// Deletar comida
exports.delete = async (req, res) => {
  try {
    await Comer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comida removida com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar comida!' });
  }
};