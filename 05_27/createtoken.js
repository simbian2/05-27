/*


signature 서명
    HMACSHA256(
        base64UrlEncode(header) + "." +
        base64UrlEncode(payload),
    
    your-256-bit-secret


*/
/*
var express = require('express');
var cors = require('cors');
var app = express();

// CORS 설정
app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});
*/
const crypto = require('crypto')

function createtoken(){

    let header = {
        "alg":"HS256",

    }

    let encodeheader = Buffer.from(JSON.stringify(header))
                        .toString('base64')
                        .replace('=',''); //바이너리 (16진수) (64진수)

    let payload = {
        "sub":"1234567890",
        "name":"John Doe",
        "user":"web7722",
        "iat":1516239022
    }

    let encodepayload = Buffer.from(JSON.stringify(payload))
                        .toString('base64')
                        .replace('==','');

    let signature = crypto.createHmac('sha256',Buffer.from('seull'))
                    .update(`${encodeheader}.${encodepayload}`)
                    .digest('base64')
                    .replace('=','')    

    return `${encodeheader}.${encodepayload}.${signature}`                
}

let token = createtoken()
console.log(token)
module.exports = createtoken


//image도 텍스트파일-바이너리 형식이다

//비트 15라는 숫자를 이진법으로 1111
//비트 15라는 숫자를 십육진법으로 F
//15는 4beat이다
//공유할 뿐이다.