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
    await Dado.findByIdAndDelete(req.params.id)
    res.redirect('/')
  })

  router.get('/:id', async(req,res) =>{
    const Dado = await Dado.findById(req.params.id)
    res.render('dados/shows', (dado: dado)) //Não sei como corregi esse erro
  })

  router.get('/edit/:id', async(req, res) =>{ 
    const Dado = await Dado.findById(req.params.id)
    res.render('dados/edit',(dado: dado) )// mesmo erro
  })

  // para pedir por banco de dados

  router.post('/', async(req, res, next)=>{
    req.dado = newDado()

    next()
  }),salvar_editar('/new');

  router.put('/:id', async(req,res,next) =>{
    req.dado = await Dado.findbyId(req,params,id);
    next();
  },salvar_editar('edit'));
  function salvar_editar(path){
    return async(req,res)=> {
      let dado = require.dado
        dado.nome = req.body.nome,
        dado.sobrenome = req.body.sobrenome,
        dado.cpf = req.body.cpf,
        dado.endereco = req.body.endereco,
        dado.plano = req.body.plano,  
      }
    
      try{
        dados = await dados.save()
        res.redirect(`/dados/${dados.id}`)
    } catch(e){
        console.log(e)
    }
    }
  }


  
  try {
    const newDado = await dado.save()
    res.status(201).json(newDado)
  } catch (err) {
    res.status(400).json({ message: err.message })
  };

module.exports = router
module.exports = router