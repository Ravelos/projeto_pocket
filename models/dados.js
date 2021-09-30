const mongoose = require("mongoose");

const dadoSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Sobrenome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    endereço: {
        type: String,
        required: true
    },
    Plano: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }

    
})

module.exports = mongoose.model("Dado", dadoSchema);