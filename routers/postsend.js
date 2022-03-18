var express = require('express')
var router = express.Router();

router.get('/postsend',(req, res) =>{
    res.send('/postsend라는 요청의 응답일뿐');
})

module.exports = router;