const express = require('express') //import express
const app = express() //initialize express 
require('dotenv').config()
// const mongoose = require ('mongoose') // for storage 
const CategoryRouter = require('./api/category/router')
const port =process.env.SERVER_PORT  || 3200  //port dedi run karne ko




app.use(express.json()) //to parse into json 
app.use('/api',CategoryRouter)
// app.use('/api', require('./api/users/router'))
// app.use('/api',require('./api/products/router'))




// mongoose.connect(process.env.MONGO_URL) //env se lengy link mongo ka
// .then(()=> console.log("DB connec")) //jb connect hojaey to 
// .catch((err)=> console.log("wrong")) //error ho to (like if else)

app.listen(port, () => { //chalne wali port 
  console.log(`Example app listening on port ${port}`)
})