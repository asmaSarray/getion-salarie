const mongoose = require('mongoose')
const Congechema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    du: {
        type: Date,
        required: true
    },
    au: {
        type: Date,
        required: true
    },
    duree:{
        type: Number,
        required: true
    },
    Reponse:{
        type:String,
        required:false
    },
    idSalarie:{
        type:String,
        required:false
    }
})

let Conge = mongoose.model('Conge', Congechema, 'Conges')

module.exports = Conge
