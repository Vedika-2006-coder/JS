const num=300
const n=new Number(400.00000)
console.log(num)
console.log(n)
console.log(n.toString())
console.log(n.toFixed(2))
const c=1123.8966
console.log(c.toPrecision(3))
const d=1000000
console.log(d.toLocaleString('en-IN')) // add commas

// --------------------------- maths----------------------------------
// math is a library that comes with js by-default
console.log(Math)
console.log(Math.abs(-8))
console.log(Math.round(5.4))
console.log(Math.round(5.5))
console.log(Math.round(5.62))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.max(5,7,24,9,43,8,6))
console.log(Math.min(5,7,24,9,43,8,6))
console.log(Math.random()) // value between 0 and 1 // 0 and 1 included
console.log(Math.floor(Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)