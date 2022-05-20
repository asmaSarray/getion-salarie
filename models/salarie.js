const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const SalarieSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
   
})

SalarieSchema.methods.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

SalarieSchema.methods.comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}
let Salarie = mongoose.model('Salarie', SalarieSchema, 'Salaries')

module.exports = Salarie
