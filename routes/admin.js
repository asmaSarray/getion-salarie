const route = require('express').Router()
const adminModel = require ('../models/admin.js')


route.post('/registre',(req,res,next)=>{
    adminModel.registreAdmin(req.body.nom,req.body.prenom,req.body.adress,req.body.email,req.body.password)
    .then((user)=>res.status(200).json({user:user,msg:"added!!"}))
    .catch((err)=>res.status(400).json({error:err}))
})

route.post('/login',(req,res,next)=>{
    adminModel.loginadmin(req.body.email,req.body.password)
   . then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err}))
    
})
module.exports=route