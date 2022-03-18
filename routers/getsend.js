var express = require('express')
var router = express.Router();

router.get('/getsend',(req, res) =>{
    res.send('/getsend라는 요청의 응답일뿐');
})

exports.module = router;