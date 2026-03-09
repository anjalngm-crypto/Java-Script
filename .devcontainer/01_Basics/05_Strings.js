const name = "Anjal"
const repoCount = 3

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount} .`)//String Interpolation

const gameName = new String('Anjal') //a way of declaring a string through object.

console.log(gameName[0])//A
console.log(gameName.length);//5
console.log(gameName.toUpperCase());//ANJAL
console.log(gameName.charAt(3))//a
console.log(gameName.indexOf('l'))//4

const newString = "   Anjal   "
console.log(newString)//   Anjal   
console.log(newString.trim())//Anjal

const newString1 = "Ankal"
console.log(newString1)//Ankal
console.log(newString1.replace("k","j"))//Anjal

console.log(newString1.includes("ka"))//true
const newString2 = "Anjal-Nigam-BCA-Grad"
console.log(newString2.split("-"))//[ 'Anjal', 'Nigam', 'BCA', 'Grad' ]

