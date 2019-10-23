const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

<<<<<<< HEAD
=======
const clientPhoneNumbersSchema = new Schema({
    telephones: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("ClientsPhoneNumbers",clientPhoneNumbersSchema);

>>>>>>> e1010494dd1d6f2ab75f3b27ecf6495a95e9acd9
const clientsSchema = new Schema({
    id: {
        type: Number,
        required: true, 
        unique: true
    },
    firstName: {
        type: String,
        required: true, 
    },
    lastName: {
        type: String,
        required: true, 
    },
    birthDate: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true, 
    },
    country: {
        type: String,
        required: true, 
    },
    state: {
        type: String,
        required: true, 
    },
    address: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    clientTelephones: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model("Clients",clientsSchema);