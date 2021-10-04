const express = require('express');
const app = express();
const router = require("./routes/dados")


const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO, {

})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}))
app.get("./", (req,res) => {
    res.send("Negocio Pocket")
} )

app.use("/dados", router)

app.listen(port, ()=> {
    console.log(`Rodando servidor pelo localhost $(3000)`)
});
