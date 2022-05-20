const express = require('express')

const app=express()
const db = require('./config/datebase')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


db();

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Request-Methods','*')
  res.setHeader('Access-Control-Allow-Headers','*')
  res.setHeader('Access-Control-Allow-Methods','*')
  next()
})



const salarie = require('./routes/salarie.route')
app.use('/salarie', salarie)
const formation = require('./routes/formation')
app.use('/formation', formation)
const conge = require('./routes/conge')
app.use('/conge', conge)

const adminModel = require('./routes/admin')
app.use('/admin', adminModel)
const UserModel = require('./routes/user')
app.use('/salarie', UserModel)


app.listen(5000, ()=>console.log('app listening on port 5000!'));

