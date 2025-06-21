// for
for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        console.log("5 is intermediate number")
    }
    console.log(i)
}
// nested loop
for (let i = 1; i <=5;i++) {
   for (let j = 1; j <=5; j++) {
    console.log(i + '*' + j +' = '+ i*j)
   }
}
const myarray=["Vedika","Trupti","Aditya","Sunil"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)  
}

// break
for (let index = 1; index <=10; index++) {
    if(index==5)
    {
        console.log("5 detected")
        break
    }
    console.log(`value of i is ${index}`)
}

// continue

for (let index = 1; index <=10; index++) {
    if(index==5)
    {
        console.log("5 detected")
        continue
    }
    console.log(`value of i is ${index}`)
}
