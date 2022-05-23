
const route=require('express').Router()
const UserModel=require('../models/user')
const Salarie = require("../models/salarie");
const Formation = require("../models/formation");

route.get('/getOne/:id',(req,res)=>{
    Formation.find({nom : req.params.id},(err,formation)=> {
        if(!err){


            res.json(formation)
        }else{
            console.log(err)
            res.json([])
        }
    })
})
route.delete('/delete/:id', (req,res)=> {

    let query = {_id: req.params.id}

    UserModel.user.deleteOne(query, (err)=> {

        if(!err) {
            res.json({message : "Salarie deleted successfully",
                type:"success",
                title:"Success"})
        } else {
            res.json({message : "Server error",
                type:"error",
                title:"Error"})
        }
    })
})


route.get('/getAll',(req,res)=>{
    UserModel.user.find({},(err,liste)=> {
        if(!err){
            res.json(liste)
        }else(
            res.json(err)
        )
    })
})
route.post('/registre',(req,res,next)=>{
    UserModel.registre(req.body.nom,req.body.prenom,req.body.adress,req.body.email,req.body.password)
    .then((user)=>res.status(200).json({user:user,msg:'added!!'}))
    .catch((err)=>res.status(400).json({error:err}))
})

route.patch('/update/:id', (req,res)=> {
    let newSalarie = ({
        email : req.body.email,
        adress: req.body.adress
    })
    let query = {_id :req.params.id}
    UserModel.user.updateOne(query, newSalarie, (err)=> {
        if(!err) {

            res.json({message : "Salarie update successfully",
                type:"success",
                title:"Success"})
        } else {
            console.log(err)
            res.json({message : "Salarie Error",
                type:"error",


                title:"Error"})
        }
    })
})

route.post('/login',(req,res,next)=>{
    UserModel.login(req.body.email,req.body.password)
    .then((token)=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json({error:err}))
})
route.get('/getUser/:id',(req,res)=>{
    UserModel.user.findById({_id : req.params.id},(err,salarie)=> {
        if(!err){
            salarie.password=''
            res.json(salarie)
        }else{
            console.log(err)
            res.json([])
        }
    })
})



module.exports=route