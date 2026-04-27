const express = require('express');
const router = express.Router()
const Stock = require('../models/Stock')

router.get('/stock',(eq, res)=>{
    res.render('stock')
})

router.post('/stock', async (req,res)=>{
    try {
        const {productName,productCode, quantity, buyingPrice, sellingPrice,date } = req.body;
        const Total = parseInt(quantity ) * parseFloat(buyingPrice);
        let newItem = new Stock({productName,
            productCode,
             quantity, 
             buyingPrice,
              sellingPrice,
              date , })
              console.log(newItem);
              await newItem.save();
              res.redirect('/');
    } catch (error) {
        console.log("Error: error.message")
        res.render('stock',{error: error.message})
    }
})

router.get('/user', (req, res)=>{
    res.render('index')
})


module.exports = router;

// full path in routing
// full paths applies to browser URL and form action  in the pug fileand redirect in the routes
// the full path for any route that is inside;  /sometning/