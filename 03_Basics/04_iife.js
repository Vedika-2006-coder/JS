// Immediately Invoked Function Expression

(function chai(){
    // named IIFE
    console.log("DB connected") // DB connected
})(); // here at the end we have to give the semicolon to end the function 

// Syntax-> (function def)()
// iife-The function that immediately executed and used to avoid the pollution of global scope

( (name)=>{
    // simple IIFE
    console.log(`DB connected two ${name}`) // DB connected two
}) ("Vedika");
