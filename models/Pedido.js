const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new mongoose.Schema({
    nomePessoa: { type: String, required: true, trim: true },
    mesa: { type: Number, required: true },
    comida: { type: mongoose.Schema.Types.ObjectId, ref: 'Comer', required: false },
    bebida: { type: mongoose.Schema.Types.ObjectId, ref: 'Beber', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Pedido', PedidoSchema);