// Definiendo Coin 
const mongoose = require('mongoose'),
    Schema = mongoose.Schema

let Coin = new Schema({
    name: String,
    value: Number

});

module.exports = mongoose.model('coin',Coin)