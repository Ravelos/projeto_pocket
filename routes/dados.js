const express = require("express");
const router = express.Router();
const Dados = require("./../models/dados");
const mongoose = require("mongoose")
const dados = require("./../models/dados");
const { Router } = require("express");
const express = require('express')
const router = express.Router()
const Dado = require('../models/dados')

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
// Creating one
router.post('/', async (req, res) => {
  const dado = new Dado({
    nome: req.body.nome,    
    sobrenome: req.body.sobrenome,
    cpf: req.body.cpf,
    endereco: req.body.endereco,
    plano: req.body.plano
    
  })

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
  })

  })
  try {
    const newDado = await dado.save()
    res.status(201).json(newDado)
  } catch (err) {
    res.status(400).json({ message: err.message })
  };

module.exports = router
module.exports = router