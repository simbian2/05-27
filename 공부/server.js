const express = require('express')
const app = express()

app.use((req,res,next)=>{
    req.ingoo = "ingoo"
    next()
}) //미들웨어

app.get('/', (req,res)=>{
    res.send(`hello world ${req.ingoo}`)
})

app.get('/user', (req,res)=>{
    req.ingoo = "dd"
    res.send(`hello world ${req.ingoo}`)
})

app.get('/board', (req,res)=>{
    req.ingoo = "dd"
    res.send(`hello world ${req.ingoo}`)
})

app.listen(3000,()=>{})