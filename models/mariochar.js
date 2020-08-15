const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// Create Model Based On Schema
const MarioChar = mongoose.model('mariochar', MarioCharSchema)

module.exports = MarioChar;
