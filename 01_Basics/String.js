const name="Vedika"
const newname="Trupti"
console.log(name+newname) // this is not suitable method 
console.log(`hii my name is ${name} and my mother name is ${newname}`) // string interpolation
const naam="Aditya"
console.log(naam.toUpperCase())
console.log(typeof naam)
const n=new String("VedikaPatil") // String object
console.log(n)
console.log(typeof n)
console.log(n.charAt(1))
console.log(n.indexOf('d'))
console.log(n.__proto__)
console.log(n.substring(1,5))
const newString=n.substring(0,5)
console.log(newString)
const newString1=n.slice(-8,4) //slice only allows negative indexes
console.log(newString1)
s="   Vedika   "
console.log(s)
console.log(s.trim())
const url="Vedika8900@gmail.com"
console.log(url.replace("8900","-"))