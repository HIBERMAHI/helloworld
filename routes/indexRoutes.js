const express = require('express')
const router = express.Router();

// get  index page
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/sales',(req,res)=>{
    res.render('sales')
})
router.get('/register',(req,res)=>{
    res.render('register')
})
router.get('/register',(req,res)=>{
    console.log(req.body)
})

router.post('/sales',(req,res)=>{
console.log(req.body)
})


module.exports = router;