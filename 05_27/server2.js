const express = require('express')
const cookieParser = require('cookie-parser')
const token = require('./createtoken') //외부 js파일 가져오기
const app = express()

app.use(cookieParser())



app.get('/',(req,res)=>{
    let {msg} = req.query
    //res.cookie('token','seull')
    res.send(`${msg}hello world!<a href = "/menu1">menu1</a><a href = "/login?id=root&pw=root">로그인</a>`)
})

app.get('/login',(req,res)=>{

    let {id,pw} = req.query;

    if(id=='root'&& pw=="root"){
        let ctoken = token()
        res.cookie('token', ctoken, {httpOnly:true,secure:true,})
        res.redirect('/?msg=로그인성공')
    } else {
        res.redirect('/?msg=로그인실패')
    }

})

app.get('/menu1',(req,res)=>{
    console.log(req.cookies)
    res.send('menu1페이지입니다.')
})
app.listen(4000,()=>{
    console.log('server start port 3000!')
})