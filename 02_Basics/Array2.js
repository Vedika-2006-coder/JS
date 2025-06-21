// const a=["Veda",'Trupti',true,60]
// console.log(a) // [ 'Veda', 'Trupti', true, 60 ]
// let b=["Sunil",'Aditya',34]
// let c=[34,"v","success"]
// // a.push(b) // [ 'Veda', 'Trupti', true, 60, [ 'Sunil', 'Aditya', 34 ] ]
// // console.log(a) 
// // console.log(a[4][2]) // 34
// const d=a.concat(b) // you have to store it in another then and then it will work
// console.log(d) // ['Veda',  'Trupti',true,    60,'Sunil', 'Aditya',34]
// console.log([...a,...b,...c]) // ['Veda',Trupti',true, 60,'Sunil', 'Aditya',34, 34,'v','success']

// const array=[3,45,7,[9,0,2,[3,5,1,[7,9]],[87,45]]]
// const newarray=array.flat(2) // [ 3, 45, 7, 9, 0, 2, 3, 5, 1, [ 7, 9 ], 87, 45 ]
// console.log(newarray)
// const newarray2=array.flat(Infinity) // [3, 45, 7, 9, 0,  2, 3,  5, 1, 7, 9, 87,45]
// console.log(newarray2) 

const s="Vedika"
console.log(Array.isArray(s)) // false
console.log(Array.from("Vedika")) // converts it into array // [ 'V', 'e', 'd', 'i', 'k', 'a' ]
console.log(Array.from({name:"Vedika"})) // imp and interesting for interview 
// // in this case it will give a empty array because it cant directly convert it 
// // so we have to tell of which we want array like of keys array or values array

let score1=100
let score2=300
let score3=900
console.log(Array.of(score1,score2,score3)) // [ 100, 300, 900 ]

