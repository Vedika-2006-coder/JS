// console.log("2">1)
// console.log("02">1)
// console.log(null>0)// false
// console.log(null==0)// false
// console.log(null>=0)// comaprison operator converts null into 0 so 0==0 so it results true 
// console.log("2"==2)

// // === it will check also datatype
// console.log("2"===2)

// ------------------------------------------------------------------------
// Stack(Primitive)-> you will get copy , Heap(Non-Primitive)-> you will get reference  (changees will happen in original value)
// let name="Vedika"
// let newname=name
// newname="Trupti"
// console.log(name)
// console.log(newname)    

let userOne={
    email_id:"vedika@google.com",
    name:"Vedika"
}
let userTwo=userOne
userTwo.email_id="Trupti@google.com"
console.log(userOne)
console.log(userTwo)
