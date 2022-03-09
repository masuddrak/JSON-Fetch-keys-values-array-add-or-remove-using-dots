const student={
    name:'Ali Baba',
    subject:'Mathematics',
    age:22
}
const student1=JSON.stringify(student)
// console.log(student1)
const student2=JSON.parse(student1)
console.log(student2)