const express = require('express')
const router = express.Router()
const Formation = require('../models/formation')


router.get('/getAll',(req,res)=>{
    Formation.find({},(err,liste)=> {
        if(!err){

        res.json(liste)
    }else(
        res.json(err)
    )
    })
})

router.post('/create', (req,res)=> {

                let newFormation = new Formation({
                    titre: req.body.titre,
                    annee: req.body.annee,
                    date:Date.now(),
                    nbre: req.body.nbre,
                    centre:req.body.centre,
                    lieu:req.body.lieu,
                    idSalarie:req.body.email

                    
                })
                newFormation.save( (err)=> {
                    if(!err) {
                        console.log('Formation was added')
                        res.json({message : "Formation added successfully",
                type:"success",
                title:"Success"})
                    } else 
                      {
                        console.log(err)
                      } 
                })
            
        
    
})
router.get('/getOne/:id',(req,res)=>{
    Formation.find({idSalarie : req.params.id},(err,formation)=> {
        if(!err){

         
        res.json(formation)
    }else{
        console.log(err)
        res.json([])
    }
    })
})
router.get('/getById/:id',(req,res)=>{
    Formation.findById({_id : req.params.id},(err,formation)=> {
        if(!err){


            res.json(formation)
        }else{
            console.log(err)
            res.json([])
        }
    })
})

router.delete('/delete/:id', (req,res)=> {

    let query = {_id: req.params.id}

    Formation.deleteOne(query, (err)=> {

        if(!err) {
            res.json({message : "Formation delete",
            type:"success",
            title:"Success"})
        } else {
            res.json({message : "Formation error",
            type:"error",
            title:"Error"})
        }
    })
})
router.put('/update/:id', (req,res)=> {
    let newFormation = ({
        Reponse : req.body.reponse
    })
    let query = {_id :req.params.id}
    Formation.updateOne(query, newFormation, (err)=> {
        if(!err) {
        
            res.json({message : "formation update successfully",
            type:"success",
            title:"Success"})
        } else {
            console.log(err)
            res.json({message : "formation Error",
            type:"error",
        

            title:"Error"})
        }
    })
})

module.exports = router







































