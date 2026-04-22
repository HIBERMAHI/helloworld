const express = require('express')
const router = express.Router();

// get  index page
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/sales',(req,res)=>{
    res.render('sales')
})
router.get('/loginn',(req,res)=>{
    res.render('loginn')
})

router.post('/sales',(req,res)=>{
console.log(req.body)
})


module.exports = router;