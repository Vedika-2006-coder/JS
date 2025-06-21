// let a=30
// if(true){
//     let a=400 // block scoped
//     console.log("The value of inner a:",a) // 400
//     const b=3000
// } 
// // {} is called block
// console.log("The value of outer a:",a) // 30
// console.log(b) // get error because const is also block scoped ,can't accessed outside block 
n=5
for(let i=0;i<n;i++)
{
   console.log("Hii,I am Vedika")
}
// *****
// global scope is different when we run the code using node // it is very imp for interview 
// and it is different when we do console on browser

// nested function

function one(){
    const name="Kali"
    function Two(){
        const website="Youtube"
        console.log("hii Guys")
    }
    // console.log(website) gives error
    
}
// the inner function can access the properties of outer function but outer function can't

if(true)
{
    const username="Vedika"
    if(username==="Vedika")
    {
        const website=" Youtube"
        console.log(username+website)
    }
    // console.log(website) gives error
}

// Scope level and mini Hoisting 
console.log(f1(3)) // it is allowed 
function f1(num){
    return num+2
}

console.log(f2(3)) // gives error  // Cannot access 'f2' before initialization
const f2=function(num){
    return num+3
}

