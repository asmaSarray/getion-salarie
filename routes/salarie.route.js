const express = require('express')
const router = express.Router()
const Salarie = require('../models/salarie')


router.get('/getAll',(req,res)=>{
    Salarie.find({},(err,liste)=> {
        if(!err){
        res.json(liste)
    }else(
        res.json(err)
    )
    })
})

router.post('/create', (req,res)=> {
    Salarie.findOne({email:req.body.email}, (err,doc)=> {
        if(err){
            console.log(err)
        }else{
            if(doc){
                console.log("email already exist")
                res.json({message : "email already exist",
                type:"warning",
                title:"Warning"})
     
}else{
                let newSalarie = new Salarie({
                    nom:req.body.nom ,
                    prenom: req.body.prenom ,
                    adress:req.body.adress,
                    email:req.body.email,

                    
                })
                newSalarie.password = newSalarie.hashPassword(req.body.password)
                newSalarie.save( (err)=> {
                    if(!err) {
                        console.log('Salarie was added')
                        res.json({message : "Salarie added successfully",
                type:"success",
                title:"Success"})
                    } else 
{
                        console.log(err)
                    } 
                })
            }
        
    }})
})
router.get('/getSalarie/:id',(req,res)=>{
    Salarie.findOne({_id : req.params._id},(err,salarie)=> {
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

    Salarie.deleteOne(query, (err)=> {

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
    Salarie.updateOne(query, newSalarie, (err)=> {
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

module.exports = router















