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
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data))



// object keys && values
const keys=Object.keys(student)
const values=Object.values(student)
// console.log(keys)
// console.log(values)


// for
const numbers=[4,54,569,8652,3]
numbers.forEach(number => {
    // console.log(number*2)
});
const number=numbers.map(num=>num*2)
// console.log(number)

// array object
const products=[
    {name:'phone', brand:'iphone',price:50000,color:'silver'},
    {name:'watch', brand:'casio',price:500,color:'white'},
    {name:'laptop', brand:'acer',price:53000,color:'golden'},
    {name:'phone', brand:'lg',price:5000,color:'silver'},
    {name:'phone', brand:'htc',price:45000,color:'yello'}
]
// console.log(products)
const newProduct={name:'glass', brand:'hpq',color:'red'}
const newArrayProduct=[...products,newProduct]
// console.log(newArrayProduct)
const remaining=products.filter(product=>product.name !=='phone')
console.log(remaining)