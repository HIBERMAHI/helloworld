// console.log('1')

// console.log('2')

console.log('serving customer 1')
// this will run after 2 seconds

setTimeout(()=>{
  console.log("serving customer2");
},2000)

console.log("serving customer 3")


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (call_production) =>{
console.log("order placed , please call producer")
// function is being called
  call_production();
};

let production = () =>{
    console.log("production has started")
};
order(production)
