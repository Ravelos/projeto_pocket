const express = require('express');
const app = express();

const port = 3000
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/negocioPocket', {
    userNewUrlParser: true, userUnifyTopology:true
})

app.set("view engine", "ejs");

app.get("./", (req,resp) => {
    resp.send("Negocio Pocket")
} )

app.listen(port, ()=> {
    console.log(`Rodando servidor pelo localhost $(3000)`)
});

