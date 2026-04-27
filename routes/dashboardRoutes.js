const express = require('express');
const router = express.Router();


router.get('/storeDash', (req,res)=>{
    res.render('storeDash');
})

router.get('/stockregistration',(req,res)=>{
    res.render('stockregistration');
})






module.exports = router;