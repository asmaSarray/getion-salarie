const express = require('express')
const router = express.Router()
const Conge = require('../models/conge')


router.get('/getAll',(req,res)=>{
    Conge.find({},(err,liste)=> {
        if(!err){
        res.json(liste)
    }else(
        res.json(err)
    )
    })
})

router.post('/create', (req,res)=> {

                let newConge = new Conge({
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    type:req.body.type,
                    du: req.body.du,
                    au:req.body.au,
                    duree:req.body.duree,
                    idSalarie:req.body.id
                   

                    
                })
                newConge.save( (err)=> {
                    if(!err) {
                        console.log('conge was added')
                        res.json({message : "conge added successfully",
                type:"success",
                title:"Success"})
                    } else 
                      {
                        console.log(err)
                      } 
                })
            
        
    
})
router.get('/getOne/:id',(req,res)=>{
    Conge.findOne({_id : req.params.id},(err,Conge)=> {
        if(!err){
         
        res.json(Conge)
    }else{
        console.log(err)
        res.json([])
    }
    })
})

router.delete('/delete/:id', (req,res)=> {

    let query = {_id: req.params.id}

    Conge.deleteOne(query, (err)=> {

        if(!err) {
            res.json({message : "Conge delete",
            type:"success",
            title:"Success"})
        } else {
            res.json({message : "Conge error",
            type:"error",
            title:"Error"})
        }
    })
})
router.patch('/update/:id', (req,res)=> {
    let newConge = ({
        reponse : req.body.reponse,
    })
    let query = {_id :req.params.id}
    Conge.updateOne(query, newConge, (err)=> {
        if(!err) {
        
            res.json({message : "conge update successfully",
            type:"success",
            title:"Success"})
        } else {
            console.log(err)
            res.json({message : "conge Error",
            type:"error",
        

            title:"Error"})
        }
    })
})

module.exports = router