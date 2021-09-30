const express = require("express");
const router = express.Router();
const Dados = requite("./../models/dados");

const cliente = Cliente.deleteOne({_id: req.params.id}, (err) =>{
    if(err) return res.status(400).json({
        error: true,
        message: "Error: cliente não foi apagado com sucesso!"
    });

    return res.json({
        error: false,
        message: "Cliente apagado com sucesso"
    })
})

app.listen(port, ()=> {
    console.log(`Rodando servidor pelo localhost $(3000)`)
});