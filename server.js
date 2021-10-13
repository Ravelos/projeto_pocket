const express = require('express');
const app = express();
const dotenv = require("dotenv");
require('dotenv').config()
const mongoose = require('mongoose')
const dadosRouter = require('./routes/dados')

mongoose.connect(process.env.MONGO, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Conectado ao Banco de Dados'))

app.use(express.json())

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}))


app.use('/dados', dadosRouter)

app.get('/', (req, res) => {
    res.send("Negocio Pocket")
})

app.listen(8080, () => console.log('Servidor Iniciado')) 