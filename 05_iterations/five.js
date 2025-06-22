const code=["java","cpp","c","php"]
const value=code.forEach( (item)=>
{
    // console.log(item)
    return item // forEach loop does not return anything 
})
// so use filter 
// *** filter
const a=[1,2,3,4,5,89,7]
const f=a.filter( (num)=>{
    return num>4
})
console.log(f) // [ 5, 89, 7 ]

const b=[20,30,40,50]
const f1=b.filter( (n)=>n>20)
console.log(f1)// [ 30, 40, 50 ]
b.forEach( function(item)
{
   if(item>30)
    {
        console.log(item)
    } 
})
const newnum=[]
b.forEach( (num)=>{
    if(num>20)
    {
        newnum.push(num)
    }
})
console.log(newnum)

// Example of books=>..........