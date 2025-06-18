let mydate=new Date();
console.log(mydate)// 2025-06-18T06:47:26.183Z
console.log(mydate.toString()) // Wed Jun 18 2025 06:47:26 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toISOString()) // 2025-06-18T06:47:26.183Z
console.log(mydate.toJSON()) // 2025-06-18T06:47:26.183Z
console.log(mydate.toLocaleDateString()) // 6/18/2025
console.log(mydate.toLocaleString()) // 6/18/2025, 6:47:26 AM
console.log(mydate.toLocaleTimeString()) // 6:47:26 AM
console.log(mydate.toDateString()) // Wed Jun 18 2025
console.log(mydate.toTimeString()) // 06:52:44 GMT+0000 (Coordinated Universal Time)
console.log(typeof mydate) //imp ,asks in interview

let date=new Date(2025,5,1,5,6) // in js month starts from 0, ex-jan-0,feb-1
console.log(date.toDateString()) // Sun Jun 01 2025
console.log(date.toString()) // Sun Jun 01 2025 05:06:00 GMT+0000 (Coordinated Universal Time)
let d=new Date("01-06-2023")
let f=new Date("01-06-2024")
console.log(d.toLocaleDateString()) // 1/6/2006
 
let mytime=Date.now() // Date.now() is a built-in JavaScript method that returns the current timestamp,
console.log(mytime)
console.log(d.getTime()) //.getTime()-> It gives time in milliseconds from 1 Jan 1970 to your provided date.
console.log(f.getTime())
console.log(Math.floor(Date.now()/1000))

let g=new Date()
console.log(g.getDate())
console.log(g.getDay()) // Mon-1,tue-2,..
console.log(g.getMonth()) // jan-0,feb-2,...
console.log(g.getTime())




