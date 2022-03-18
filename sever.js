var express = require('express')
var app = express();

var getsend = require('./routers/getsend')
var postsend = require('./routers/postsend')
var sqlsend = require('./routers/sqlsend')



app.get('/',(req, res) =>{
    res.send('첫페이지 무사출력됨?');
})

app.use('/getsend', getsend)
app.use('/postsend', postsend)
app.use('/sqlsend', sqlsend)

app.listen(8080, () => {
    console.log('콘솔창을 확인 서버구동완료');
})