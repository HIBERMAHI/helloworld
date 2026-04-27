// 1Dependensies
const path = require('path')
// mongodb
require('dotenv').config()

const connectDb = require('./config/db')

const mongoose = require('mongoose');

const express = require('express');
const expressSession = require('express-session')
// const path = require('path')

// 2 istanciations
const app = express();
const port = 3000

//3 configurations
connectDb();
app.set('view engine', 'pug')
app.set('views engine', path.join(__dirname,'views'))


// 4 Middleware
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: false }));

app.use(expressSession({
  secret:"secret",
  resave:false,
  saveUninitialized:false,
}))

// 5 Routes
app.use('/',require('./routes/indexRoutes'))
app.use('/',require('./routes/stockRoutes'))
app.use('/',require('./routes/dashboardRoutes'))


// Routing
// structure of a route
// app.method(Path, handler)
// app.get('/', (req, res) => { // new
//   res.send('Homepage! Hello world.');
// });







app.use((req,res)=>{
  res.status(404).send('Oops! Route not found.')
});

// 6 Bootstrapping Server

// This should be the last line of code in this file
app.listen(port, () => console.log(`listening on port  ${port}`)); // new
