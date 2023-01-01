const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
const app=express()


app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/aarogay")
.then(()=>console.log("MongoDb is connected.."))
.catch((err)=>console.log(err))

app.use('/',router)

app.listen(3000, ()=> console.log("express app is running on port 3000"))
