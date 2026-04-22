const express = require('express');
const router = express.Router()

router.get('/user',(eq, res)=>{
    res.render('stock')
})


router.get('/user', (req, res)=>{
    res.render('index')
})


module.exports = router;

// full path in routing
// full path applies to browser URL , form action in the pug file