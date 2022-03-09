const student={
    name:'Ali Baba',
    subject:'Mathematics',
    age:22
}
// conver object json file 
const student1=JSON.stringify(student)
// console.log(student1)

// conver json to normal object
const student2=JSON.parse(student1)
// console.log(student2)



// fetch using
fetch('url')
.then(res=>res.json())
.then(data=>console.log(data))