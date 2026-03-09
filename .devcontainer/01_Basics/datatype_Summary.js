// JS is Dynamically typed

// Primitive

// 7 types :String,Number,Boolean,null,BigInt,undefined,symbol

const score =100//Number
const scoreValue=100.3//Not decimal numberonly

const is_LoggedIn = false//Boolean
const outsideTemp =null//Object
let userEmail = undefined //OR let userEmail;

const id = Symbol('123')//Symbol is always unique
const anotherId = Symbol('123')

// console.log(id)
// console.log(anotherId)
// console.log(id == anotherId)//false due to symbol is always unique value 

const bigNumber = 12332112332112345n


// Reference type(Non primitive)

// Arrays,Objects,Functions

const heros = ["Ash" , "Pickachu" , "Jigglypuff"]//Array

let myObj = {//Object
    name:"Anjal",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction)//function
// console.log(typeof heros)//object
// console.log(typeof myObj)//object


// Memory Topic


/*Stack --> we get a copy of the variable that you declared.
Heap --> in this we get a reference so all the change is in original value
*/


// Stack (Primitive) ,Heap (Non-Primitive)

//Concept of stack because it works on copy of a variable.

let officialName = "Anjal"
let nickName = officialName
console.log(officialName)//Anjal
nickName = "Geet"
console.log(officialName)//Anjal
console.log(nickName)//Geet


//Concept of Heap because it works on reference
let userOne={
    name:"Virat",
    jersery:7
}

let userTwo= userOne

userTwo.jersery=18

console.log(userOne)//{ name: 'Virat', jersery: 18 } 
console.log(userOne.jersery)//18
console.log(userTwo.jersery)//18