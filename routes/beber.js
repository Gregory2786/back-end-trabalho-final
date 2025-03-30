const express = require("express");
const router = express.Router();

const  BeberController = require("../controllers/beberController");

router.post("/", BeberController.create);

module.exports = router;

app.post('/beber', async (req, res) => {
    try {
        const { name, img, price, alcoolica } = req.body;
        const novaBebida = new Bebida({ name, img, price, alcoolica });
        await novaBebida.save();
        res.status(201).json(novaBebida);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar bebida!" });
    }
});

app.get('/beber', async (req, res) => {
    try {
        const beber = await Bebida.find();
        res.json(beber);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar beber!" });
    }
});

app.put('/beber/:id', async (req, res) => {
    try {
        const { name, img, price, alcoolica } = req.body;
        const bebidaAtualizada = await Bebida.findByIdAndUpdate(req.params.id, { name, img, price, alcoolica }, { new: true });
        res.json(bebidaAtualizada);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar bebida!" });
    }
});

app.delete('/beber/:id', async (req, res) => {
    try {
        await Bebida.findByIdAndDelete(req.params.id);
        res.json({ message: "Bebida removida com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar bebida!" });
    }
});