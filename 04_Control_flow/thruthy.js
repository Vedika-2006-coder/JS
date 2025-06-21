// thruthy=>means it assume that it is true
// falsy=>means it is assume that it is false
const email="veda@google.com"
if(email)
{
    console.log("user has email")
}
// here  assumed that email is true

//thruthy values=>
    // []," ","0",'false',{},function(){},true
//falsy values=>
    // "",false,undefined, NAN,0,null,-0,BigInt 0n
// here empty array is thruthy value so to check weather  array is empty or not  use this=>
const arr=[]
if(arr.length==0)
{
    console.log("Array is empty")
}
// similary for  empty object =>
const obj={}
if(Object.keys(obj).length==0)
{
    console.log("object is empty")
}

//Imp=>
    false==0 // true
    false=="" // true
    0==""// true
    false==null // false
if(0=="")
{
    console.log("they are equal")
}

// Nullish coalescing operator (??) : null undefined
let val1=5 ?? 10 // 5
let val2=null ?? 90 // 90
let val3=undefined ?? 5 // 5
let val4=null ?? 10 ?? 20 //10
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

// Ternary Operator

// condition ? true : false
let age=20
age>18 ? console.log("adult"):console.log("child")