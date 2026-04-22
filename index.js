// 1Dependensies
const path = require('path')

const express = require('express');
const expressSession = require('express-session')
// const path = require('path')

// 2 istanciations
const app = express();
const port = 3000

//3 configurations
app.set('view engine', 'pug')
app.set('views engine', path.join(__dirname,'views'))


// 4 Middleware
app.use(express.static(path.join(__dirname, 'public')))
// set template engine to pug


// app.use((req, res, next) => {
//    console.log("A new request received at " + Date.now());

//    // This function call tells that more processing is
//    // required for the current request and is in the next middleware
//   //  function/route handler.
//    next();  
// });
// app.use('/dog',(req, res, next) => {
//   console.log('A new request received at ' + Date.now());
//   next();
// });
app.use(express.urlencoded({ extended: false }));

app.use(expressSession({
  secret:"secret",
  resave:false,
  saveUninitialized:false,
}))

// 5 Routes
// Routing
// structure of a route
// app.method(Path, handler)
// app.get('/', (req, res) => { // new
//   res.send('Homepage! Hello world.');
// });

app.post('/quotes', (reg , res)=>{
  res.send("this is my world")
})
app.put('/darkness',(req, res)=>{
  res.send("Am in two layers of darkness, How can I get out")
})
app.delete('/young',(req, res)=>{
  res.send("The light that is not limited")
})


// path parameters
app.get('/students/:firstname', (req, res)=>{
  res.send('my first name is'+ req.params.firstname )
})
// always second last code block
// query strings / qurry parameters
app.get('/dog/:origin', (req, res)=>{
  res.send('I am looking for a dog from'+ req.params.origin + 'which is a ' + req.query.breed + 'and is' + req.query.color + 'in color')
})

app.get('/dog', (req, res)=>{
  res.send('I am looking for a dog from'+ req.query.origin + 'which is a ' + req.query.breed + 'and is' + req.query.color + 'in color')
})
app.get('/sales',(req, res)=>{
  res.sendFile(__dirname + '/html/sales.html')

})

app.post('/sales',(req, res)=>{
  console.log(req.body)
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/html/stock.html')
});



app.use((req,res)=>{
  res.status(404).send('Oops! Route not found.')
});

// 6 Bootstrapping Server

// This should be the last line of code in this file
app.listen(port, () => console.log(`listening on port  ${port}`)); // new
