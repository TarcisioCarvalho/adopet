const mongoose = require('../database/conn.js');


const {Schema }= mongoose;

const User = mongoose.model(
    'User',
    new Schema({
        name:{
            type:string,
            required:true
        },
        email:{
            type:string,
            required:true
        },
        image:{
            type:string
        },
        phone:{
            type:string
        }
    })
);

module.exports = User;