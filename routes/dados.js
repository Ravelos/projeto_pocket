const express = require("express");
const router = express.Router();
const Dados = require("./../models/dados");
const mongoose = require("mongoose")
const dados = require("./../models/dados");
const { Router } = require("express");

router.post( '/', async (req, res, next) => {
    req.dados = new Dados()
    next()
    let dados = new Dados({
        nome : req.body.nome,
        sobrenome : req.body.sobrenome,
        cpf : req.body.cpf,
        endereco : req.body.endereco,
        plano : req.body.plano,  
    })
    try{
        dados = await dados.save()
        res.redirect(`/dados/${dados.id}`)
    } catch(e){
        console.log(e)
    }

}  )

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
  })


module.exports = router