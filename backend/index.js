const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


const pets = require('./src/pets.json');

app.get('/pets',(req,res)=>{
    return res.json(pets)
})


app.listen(port,()=>{
    console.log('Logado!');
})