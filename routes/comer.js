const express = require("express");
const router = express.Router();

const  ComerController = require("../controllers/comerController");

router.post("/", ComerController.create);

module.exports = router;

app.post('/comer', async (req, res) => {
    try {
        const { name, img, price, ingredientes } = req.body;
        const novaComida = new Comida({ name, img, price, ingredientes });
        await novaComida.save();
        res.status(201).json(novaComida);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar comer!" });
    }
});

app.get('/comer', async (req, res) => {
    try {
        const comer = await Comida.find();
        res.json(comer);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar comer!" });
    }
});

app.put('/comer/:id', async (req, res) => {
    try {
        const { name, img, price, ingredientes } = req.body;
        const comidaAtualizada = await Comida.findByIdAndUpdate(req.params.id, { name, img, price, ingredientes }, { new: true });
        res.json(comidaAtualizada);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar comer!" });
    }
});

app.delete('/comer/:id', async (req, res) => {
    try {
        await Comida.findByIdAndDelete(req.params.id);
        res.json({ message: "Comida removida com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar comer!" });
    }
});