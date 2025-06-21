function myfun(){
    console.log("V")
    console.log("E")
    console.log("D")
    console.log("I")
    console.log("K")
    console.log("A")
}
myfun()

function addTwo(num1,num2){ // here num1 and num2 is called parameters
    console.log(`The sum is ${num1+num2}`)
}
addTwo(2,null) // 2 // here 2 and null is called arguments
addTwo(2,"a") // 2a

function addTwo1(num1,num2){ // here num1 and num2 is called parameters
    return num1+num2
}
const result=addTwo1(4,8)
console.log("Result:",result)

function loginuser(username){ 
    if(username===undefined)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} has just logged in`
}
console.log(loginuser("Vedika Patil")) // Vedika Patil has just logged in
console.log(loginuser()) // undefined has just logged in

function loginuser1(username="sam"){ 
    if(username===undefined)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} has just logged in`
}
console.log(loginuser1()) // sam has just logged in

// rest and spread Operator
function calculateprice(val1,val2,...num1){ // rest operator
    return  num1
}
console.log(calculateprice(100,200,400,700)) // [ 400, 700 ] // 100 goes in val1,200 goes in val2,
//  and rest values are goes in num1

// passing object in function 
const myobj={
    username:"Tony",
    age:78
}
function myfun1(anyobj){
    console.log(`My name is ${anyobj.username} and I am ${anyobj.age} years old`)
}
myfun1(myobj)
myfun1({
    username:"Aditya",
    age:45
})

// passing array in function
const myarray=[200,300,500]
function myfun3(array){
    console.log("The sum is ",array[0]+array[1]+array[2])
}
myfun3(myarray)
myfun3([800,200,500])