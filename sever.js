var express = require('express')

var getsend = require('./routers/getsend')
var postsend = require('./routers/postsend')
var splsend = require('./routers/sqlsend')

var app = express();

app.get('/',(req, res) =>{
    res.send('첫페이지 무사출력됨?');
})

app.use('/getsend', getsend)
app.use('/postsend', getsend)
app.use('/sqlsend', getsend)

app.listen(8080, () => {
    console.log('콘솔창을 확인 서버구동완료');
})