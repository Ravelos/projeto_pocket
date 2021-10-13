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

const router = require("./routes/dados")
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO, {
})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}))
app.get("/", (req,res) => {
    res.send("Negocio Pocket")
} )
mongoose.connect(process.env.MONGO, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Conectado ao Banco de Dados'))

app.use("/dados", router)
app.use(express.json())

const dadosRouter = require('./routes/dados')
app.use('/dados', dadosRouter)

app.get('/', (req, res) => {
    res.send("Negocio Pocket")
})

app.listen(port, ()=> {
    console.log(`Rodando servidor pelo localhost $(3000)`)
});
app.listen(3000, () => console.log('Servidor Iniciado'))

