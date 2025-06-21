// singleton
const obj=new Object()
obj.id=89
obj.name="Veda"
obj.address="veda@google.com"
console.log(obj)
const regular_user={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Tony",
            lastname:"Jerk"
        }
    }
}
console.log(regular_user.fullname.userfullname.firstname)

const obj1={1:"a",2:"b",3:"c",4:"d"}
const obj2={2:"e",6:"f",7:"g"}
console.log({...obj1,...obj2}) //  {'1': 'a','2': 'b','3': 'c','4': 'd','5': 'e','6': 'f','7': 'g'}
console.log(Object.assign({},obj1,obj2)) // {'1': 'a','2': 'b','3': 'c','4': 'd','5': 'e','6': 'f','7': 'g'}
// keys that appear in both objects will be overwritten by the second object's values.

const data=[
    {
        id:23,
        name:"Veda"
    },
    {
        id:90,
        name:"Trupti"
    },
    {
        id:79,
        name:"Aditya"
    },
    {
        id:46,
        name:"Sunil"
    }
]
console.log(data[1].name) // Trupti
console.log(obj) // { id: 89, name: 'Veda', address: 'veda@google.com' }
console.log(Object.keys(obj)) // [ 'id', 'name', 'address' ]
console.log(Object.values(obj)) // [ 89, 'Veda', 'veda@google.com' ]
console.log(Object.entries(obj)) //  [ [ 'id', 89 ], [ 'name', 'Veda' ], [ 'address', 'veda@google.com' ] ]
console.log(obj.hasOwnProperty('age'))

// Object destructor
const course={
    coursename:"js",
    courseprice:999
}
const {coursename:name}=course
console.log(name)

// API calls using JSON
// In JSON,the keys are also in " "

// {
//     "name":"Vedika",
//     "id":60,
//     "age":90
// }

// [
//     {},
//     {},
//     {}
// ]