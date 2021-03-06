const express = require('express')

const app=express()
const db = require('./config/datebase')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
/*const webpush = require('web-push');

const vapidKeys = { // new
  publicKey: 'BMi6-kVcF9NTwFcBKfGJPxKUPp086iP8YMbYKFUzTKylK-7gIABgD7y_nkE9kKAdzAK95e8RK6eT9jtUKe6xtls', // new
  privateKey: 'V_ydeacC7bKTOdWgtRSVAcL6Xx9haIuGZsVEZVV-FdQ' // new
};*/

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
app.use('/user', UserModel)


app.listen(5000, ()=>console.log('app listening on port 5000!'));

