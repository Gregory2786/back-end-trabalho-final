const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nomePessoa: { type: String, required: true, trim: true },
    mesa: { type: Number, required: true },
    comida: { type: mongoose.Schema.Types.ObjectId, ref: 'Comida', required: true },
    bebida: { type: mongoose.Schema.Types.ObjectId, ref: 'Bebida', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pedido', PedidoSchema);
