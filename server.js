require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Conectado ao Banco de Dados'))

app.use(express.json())

const dadosRouter = require('./routes/dados')
app.use('/dados', dadosRouter)

app.get('/', (req, res) => {
    res.send("Negocio Pocket")
})

app.listen(3000, () => console.log('Servidor Iniciado'))
