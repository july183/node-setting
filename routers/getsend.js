var express = require('express');
var mysql =  require('mysql')
var dbconfig = require('../db/config.js')
var connection = mysql.createConnection(dbconfig)
var routers = express.Router();

routers.get('/',(req, res) =>{
    res.send('/getsend라는 요청의 응답일뿐');
})

routers.get('/getjson',(req, res) =>{
    res.send({'url':'/getsend/getjson'});
})

routers.post('/post',(req, res) =>{
    res.send({'url':'/getsend/post',
    'title':'getsend.js내의 post라우팅'
    });
})

routers.get('/awssql',(req, res) => {
    connection.query('SELECT * FROM Users', (error, rows) =>{
        if(error) throw error; 
        console.log('해당스키마안의 테이블내용 : ', rows);
        res.send(rows);
    })
})

module.exports = routers;