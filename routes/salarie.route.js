
var router = require('express').Router()
const Salarie = require('../models/salarie')
const UserModel = require("../models/user");
const adminModel = require("../models/admin");



router.get('/getAll',(req,res)=>{
    Salarie.salari.find({},(err,liste)=> {
        if(!err){
        res.json(liste)
    }else(
        res.json(err)
    )
    })
})



router.post('/registre',(req,res,next)=>{
    Salarie.registre(req.body.nom,req.body.prenom,req.body.adress,req.body.email,req.body.password)
        .then((user)=>res.status(200).json({user:user,msg:'added!!'}))
        .catch((err)=>res.status(400).json({error:err}))
})

router.get('/getSalarie/:id',(req,res)=>{
    Salarie.salari.findById({_id : req.params.id},(err,salarie)=> {
        if(!err){
            salarie.password=''
        res.json(salarie)
    }else{
        console.log(err)
        res.json([])
    }
    })
})

router.delete('/delete/:id', (req,res)=> {

    let query = {_id: req.params.id}

    Salarie.salari.deleteOne(query, (err)=> {

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
router.patch('/update/:id', (req,res)=> {
    let newSalarie = ({
        email : req.body.email,
        adress: req.body.adress
    })
    let query = {_id :req.params.id}
    Salarie.salari.updateOne(query, newSalarie, (err)=> {
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
router.post('/login',(req,res,next)=>{
    Salarie.login(req.body.email,req.body.password)
        .then((token)=>res.status(200).json({token:token}))
        .catch((err)=>res.status(400).json({error:err}))
})

module.exports = router















