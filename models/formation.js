const mongoose = require('mongoose')
const Formationchema = new mongoose.Schema({
    titre: {
        type: String,
        required: false
    },
    annee: {
        type: Number,
        required: false
    },
    date:{
        type: Date,
        required: true
    },
    nbre: {
        type: Number,
        required: false
    },
    centre: {
        type: String,
        required: false
    },
    lieu:{
        type: String,
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

let Formation = mongoose.model('Formation', Formationchema, 'Formations')

module.exports = Formation
