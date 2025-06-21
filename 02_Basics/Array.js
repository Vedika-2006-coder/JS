// Array
const  a=[1,2,3,4,5]
console.log(a)
const b= new Array(2,8,9,45)
console.log(a[3])
const my=["Sunil","Trupti","Vedika","Aditya"]

// // Array Methods

a.push(6)
a.push(25)
a.push(78)
a.pop();
console.log(a);
a.shift() // removes the value from start,doesn't require parameter
console.log(a)
a.unshift(8) // adds the value at start,require parameter
console.log(a)
console.log(a.includes(10))
console.log(a.indexOf(3))

const newarray=a.join(); // converts all elements into string
console.log(newarray)
console.log( typeof newarray)

// slice , splice

console.log(a)

console.log(a.slice(1,3))
console.log(a)

console.log(a.splice(1,3))
console.log(a)
