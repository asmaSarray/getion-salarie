const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
require('dotenv').config()
const jwt=require('jsonwebtoken')
const { promise } = require('bcrypt/promises')

let schemaUser=mongoose.Schema({
    nom:String,
    prenom:String,
    adress:String,
    email:String,
    password:String
})


let url=process.env.URL


var Admin=mongoose.model('Admin',schemaUser)

exports.registreAdmin=(nom,prenom,adress,email,password)=>{
    return new Promise ((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
            return Admin.findOne({email:email})
        }).then((doc)=>{
            if(doc){

                reject('this email is exist')
            }else{
                bcrypt.hash(password,10,null)
                .then((hashedPassword)=>{
                    let user=new Admin({
                        nom:nom,
                        prenom:prenom,
                        adress:adress,
                        email:email,
                        password:hashedPassword
                    })
                    user.save().then((user)=>{

                        resolve(user)
                    })
                    .catch((err)=>{

                        reject(err)
                    })
                }).catch((err)=>{

                    reject(err)
                })
            }
        }).catch((err)=>err)
    })
}

var privateKey=process.env.PRIVATE_KEY
exports.loginadmin=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
            return Admin.findOne({email:email})
       
    })
.then((user)=>{
    if(!user){

        reject("invalid email and password")
    }else{
        bcrypt.compare(password,user.password).then((same)=>{
            if(same){
                let token=jwt.sign({id:user._id,email:user.email,role:"Admin"},privateKey,{
                    expiresIn:'1h',
                })

                resolve({token:token,role:"Admin",nom:user.nom})
            }else{

                reject('iinvalid email and password')
            }
        }).catch((err)=>{

            reject(err)
        })
    }
})
})
}
