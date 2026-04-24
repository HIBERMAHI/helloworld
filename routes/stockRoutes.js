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
// full paths applies to browser URL and form action  in the pug fileand redirect in the routes
// the full path for any route that is inside;  /sometning/