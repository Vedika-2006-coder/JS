const user={
    username:"Vedika",
    price:999,
    welcomemsg:function(){
        console.log(`hii ${this.username}, welcome!!`) // this refers to the current
        // console.log(this)
    }
}
user.welcomemsg() // hii Vedika, welcome!!
user.username="Aditya"
user.welcomemsg() // hii Aditya, welcome!!
console.log(this) // {}

// ***** In the browser the global object is Window 
// so when we try to print this in browser we get Window Object

// this not works in the function , it will only work with object
function chai(){
    let username="hitesh"
    console.log(this.username) // undefined
}
chai()

const chai1=function(){
    let username="hitesh"
    console.log(this.username) //  undefined
}
chai()

// arrow function
const a=()=>{

}

// explicit arrow function // when we use return then it is explicit
// i.e when we use curly braces then we have to use return 
const addTwo=(num1,num2)=>{
    return num1+num2
} 
console.log(addTwo(3,5))

// implicit arrow function
const addTwo2=(num1,num2)=>(num1+num2) // here we have to give the parenthesis
console.log(addTwo(3,6)) // 9

const a1=()=>({username:"Vedika"}) // here we must have to give the parenthesis in the object 
// otherwise it will not work
console.log(a1())