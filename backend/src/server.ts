import express from "express";

const app = express();


app.use('/',(req,res)=> res.status(200).json({status : 'success', version: '1.0.1'}) );

app.listen(8080, () => console.log('Server Runing'));