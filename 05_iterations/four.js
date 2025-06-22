// forEach
const arr=["JS","java","python","cpp"]
arr.forEach(function (item){
    console.log(item)
})

arr.forEach( (i)=>{
    console.log(i)
})
// *** IMP
function fun(item)
{
    console.log(item)
}
arr.forEach(fun)

arr.forEach(function (item,inde,a){
    console.log(item,inde,a)
})

// *** //[{},{},{}] // Very IMP 
const code=[{
    name:"Vedika",
    age:80
},
{
    name:"Trupti",
    age:46
},
{
    name:"Aditya",
    age:56
},
{
    name:"Sunil",
    age:10
}
]
code.forEach( (item)=>{
    console.log(item.age)
})