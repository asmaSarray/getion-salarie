
const route=require('express').Router()
const UserModel=require('../models/user')


route.post('/registre',(req,res,next)=>{
    UserModel.registre(req.body.nom,req.body.prenom,req.body.adress,req.body.email,req.body.password)
    .then((user)=>res.status(200).json({user:user,msg:'added!!'}))
    .catch((err)=>res.status(400).json({error:err}))
})



route.post('/login',(req,res,next)=>{
    UserModel.login(req.body.email,req.body.password)
    .then((token)=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json({error:err}))
})


module.exports=route