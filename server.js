const express = require('express');
const app = express();

const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO, {
    userNewUrlParser: true, userUnifyTopology:true
})

app.set("view engine", "ejs");

app.get("./", (req,res) => {
    res.send("Negocio Pocket")
} )

app.listen(port, ()=> {
    console.log(`Rodando servidor pelo localhost $(3000)`)
});
