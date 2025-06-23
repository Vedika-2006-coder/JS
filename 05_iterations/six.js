myarray=[30,40,50,60,70,80]
// const arr=myarray.map( (num)=>num+10 )
// console.log(arr)

const arr=myarray
.map( (num)=>num*10)
.map( (num)=>num+1)
.filter( (num)=>num>=500)
console.log(arr)

// reduce => to add the values 
let a=[20,30,40,50]
const result=a.reduce( (acc,item)=>{
   return acc+item
},0)
console.log(result)

let shopping=[{
    itemname:"Shoes",
    price:500
},
{
    itemname:"Pant",
    price:800
},
{
    itemname:"T-Shirt",
    price:500
},
{
    itemname:"Kurta",
    price:900
},
]

const totalprice=shopping.reduce( (acc,item)=>(acc+item.price),0)
console.log(totalprice)