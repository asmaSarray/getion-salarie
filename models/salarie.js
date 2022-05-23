const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const jwt = require("jsonwebtoken");
let SalarieSchema = new mongoose.Schema({
    nom:String,
    prenom:String,
    adress:String,
    email:String,
    password:String
   
})

let url=process.env.URL



var Salarie = mongoose.model('Salarie', SalarieSchema, 'Salaries')

exports.registre=(nom,prenom,adress,email,password)=>{
    return new Promise ((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
            .then(()=>{
                return Salarie.findOne({email:email})
            }).then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject('this email is exist')
            }else{
                bcrypt.hash(password,10,null)
                    .then((hashedPassword)=>{
                        const Salarie=new Salarie({
                            nom:nom,
                            prenom:prenom,
                            adress:adress,
                            email:email,
                            password:hashedPassword
                        })
                        Salarie.save().then((u)=>{
                            resolve(u)
                            mongoose.disconnect()

                        })
                            .catch((err)=>{
                                mongoose.disconnect()
                                reject(err)
                            })
                    }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                })
            }
        }).catch((err)=>err)
    })
}


var privateKey=process.env.PRIVATE_KEY
exports.login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
            .then(()=>{
                return Salarie.findOne({email:email})

            })
            .then((user)=>{
                if(!user){
                    mongoose.disconnect()
                    reject("invalid email and password")
                }else{
                    bcrypt.compare(password,user.password).then((same)=>{
                        if(same){
                            let token=jwt.sign({id:user._id,email:user.email,role:"Salarie"},privateKey,{
                                expiresIn:'3h',
                            })
                            mongoose.disconnect()
                            resolve(token)

                        }else{
                            mongoose.disconnect()
                            reject('invalid email and password')
                        }
                    }).catch((err)=>{
                        mongoose.disconnect()
                        reject(err)
                    })
                }
            })
    })
}
module.exports.salari = Salarie


