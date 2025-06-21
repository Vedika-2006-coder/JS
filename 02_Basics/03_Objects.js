// singleton // when it is made up of constuctor it  is singleton
// if it is made up of literals then it is not singleton
// Object.create


// Object literals
const mysymbol=Symbol("key1")
const myobject={
    name:"Vedika",
    age:60,
    [mysymbol]:"hiii", // imp , asks in interview // [] represents symbol
    isloggedin:true,
    "address":"Sangli",
    travel_days:["Sunday","Saturday","Thursday"]
}
// console.log(myobject.age)
// console.log(myobject["address"]) //  Sangli
// console.log(myobject.address) // Sangli
// console.log( myobject.mysymbol)   // undefined
// console.log( myobject[mysymbol])  // hii
// myobject.name="Trupti"
// console.log(myobject)
// Object.freeze(myobject) // it will lock the object means further modification can't be done
myobject.address="Pune"
myobject.age=78
console.log(myobject)
// adds function into object

myobject.greeting=function(){
    console.log("Hii,My name is Vedika")
}
console.log(myobject.greeting) // [Function (anonymous)] // function reference
console.log(myobject.greeting()) // Hii,My name is Vedika

myobject.greeting2=function(){
    console.log(`heyy,i am ${this.age} years  old`)
}
console.log(myobject.greeting2())
console.log(myobject)
myobject.email="Vedika@chatgpt.com" // it adds email into object
console.log(myobject)
console.log(myobject["email"]) // imp,when we are accessing using [] then we have to use " " or ' '