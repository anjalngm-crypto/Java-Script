let score = 400
// console.log(score)//400
let balance = Number(400)
// console.log(balance)//400
const marks = new Number(100)//Object define
// console.log(marks)//[Number: 100]

// console.log(balance.toString().length);//3 convert in string to use more functions 
// console.log(balance.toFixed(2))//400.00//helps to provide till 2 decimal value.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3))//124 round off the value

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'))//helps to strucured the zeros 1,00,000

//  +++++++++++++++++++MATHS++++++++++++

// console.log(Math)

// console.log(Math.abs(-4))//4 negative value to positive
// console.log(Math.round(3.14))//3
// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.6))//4
// console.log(Math.min(4,6,7,9))//4
// console.log(Math.max(54,32,12))//54

console.log(Math.random())//value b/w 0 to 1
console.log(Math.floor(Math.random()*6))

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max-min+1))+min)