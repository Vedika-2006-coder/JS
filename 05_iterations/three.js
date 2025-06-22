// for of
const a=[34,67,89,46]
for(const i of a)
{
    console.log(i) // 34 67 89 46
}
const greetings="Hello World!"
for(const greet of greetings)
{
    if(greet==' ')
    {
        continue
    }
    console.log(greet)
}

// Plain Objects {} — Keys are always strings or symbols 
// i.e keys are always converted to string in object
// const obj = {
//  name: "Vedika",
//  age: 20
// };

// Map object — Keys can be any data type
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Unlike plain objects, a Map can have any type of key (including objects, functions, etc.).
// map
const map=new Map()
map.set("name","vedika")
map.set("age",18)
map.set("true",'boolean')
map.set("name",'vedika') // does not allows duplicates ,prints only one time
console.log(map) //  Map(3) { 'name' => 'vedika', 'age' => 18, 'true' => 'boolean' }


for (const [key,value] of map)
{
    console.log(key,":-",value)
}

// ** Objects are not iterable using for of 
// so use for in 
const obj={
    name:"Vedika",
    age:60,
    score:1000
}
for(const i in obj)
{
    console.log(i,":",obj[i])
}
const arr=["java","python","c"]
for(const j in arr)
{
    console.log(`The element at ${j}th location:${arr[j]}`)
}
// map connot be iterable using for in loop