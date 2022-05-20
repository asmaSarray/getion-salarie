const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config();

// mongodb environment variables
const {
    URL
} = process.env;

module.exports = async function db(){ 
    try{
    await  mongoose.connect(URL,{ useNewUrlParser: true , useUnifiedTopology: true } , (err)=> {

    if (err) {
     
console.log(err)
    } else {
        console.log("\x1b[36m%s\x1b[0m",`Connected datebase...`)
    }
})}catch(error){
    console.log(error);
        console.log("could not connect to database");
}
}