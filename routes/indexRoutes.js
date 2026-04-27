const express = require('express')
const router = express.Router();
const Registration = require('../models/Registration')

// get  index page
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/sales',(req,res)=>{
    res.render('sales')
})
// sending to database
router.get('/register',(req,res)=>{
    res.render('register')
})
router.post('/register',async (req,res)=>{
    try {
        const{username, email, password} = req.body
        // check if user already exists
        let existingUser = await Registration.findOne({email:email.toLowerCase()});
        if(existingUser){
            return res.render('register', {error:'Email is already registered'})
            
        }
        // create new user
        const newUser = new Registration({
            username,
            email:email.toLowerCase(),
            password
        })
        console.log(newUser)
        await newUser.save();
        res.redirect('/')
    } catch (error) {
        console.error(error)
    }
 
})

router.post('/sales',(req,res)=>{
console.log(req.body)
})


module.exports = router;