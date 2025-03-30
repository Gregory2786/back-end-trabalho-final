const Pedido = require('../models/Pedido');
const Comida = require('../models/Comer');
const Bebida = require('../models/Beber');

// Rota para criar um novo pedido
exports.create = async (req, res) => {
    try {
        const { nomePessoa, mesa, comida, bebida } = req.body;

        // Verificar se a comida existe
        if (comida) {
            const comidaExiste = await Comida.findById(comida);
            if (!comidaExiste) {
                return res.status(400).json({ error: "Comida não encontrada!" });
            }
        }

        // Verificar se a bebida existe
        if (bebida) {
            const bebidaExiste = await Bebida.findById(bebida);
            if (!bebidaExiste) {
                return res.status(400).json({ error: "Bebida não encontrada!" });
            }
        }

        // Criar o pedido
        const novoPedido = new Pedido({
            nomePessoa,
            mesa,
            comida: comida || undefined,
            bebida: bebida || undefined
        });

        // Salvar o pedido no banco de dados
        await novoPedido.save();

        res.status(201).json(novoPedido); // Retornar o pedido criado
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar pedido!" });
    }
};
