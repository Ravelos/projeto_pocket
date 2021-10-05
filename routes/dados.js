const express = require('express')
const router = express.Router()
const Dado = require('../models/dado')

// Creating one
router.post('/', async (req, res) => {
  const dado = new Dado({
    nome: req.body.nome,    
    sobrenome: req.body.sobrenome,
    cpf: req.body.cpf,
    endereco: req.body.endereco,
    plano: req.body.plano    
  })
  try {
    const newDado = await dado.save()
    res.status(201).json(newDado)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
