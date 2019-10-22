const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose.set('useCreateIndex', true);

const airportsSchema = new Schema({
    id: {
        type: Number,
        required: true, 
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true, 
    },
    description: {
        type:String,
        required: true
    },
    qSold: {
        type:Number,
        default: 0
    },
    qAvailable: {
        type:Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    idLibrary:{
        type:String,
        default: 1
    }
});