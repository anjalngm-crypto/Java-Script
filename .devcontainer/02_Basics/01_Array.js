// Array

const myArr = [0,1,2,3,4,5,true,"Anjal"]//Way of declaring array 1

const myHeros = ["Sallu" , "Bola zuba kesari"]//Way of declaring array 2

const myArr2 = new Array(1,2,3,4)//Way of declaring array 3

// console.log(myArr[3])//3

// Array methods

myArr.push(6)
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5, true, 'Anjal', 6 ]

myArr.pop()
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5, true, 'Anjal' ]

myArr.unshift(9)//Add element  at the starting

// console.log(myArr)//[ 9, 0, 1, 2, 3, 4, 5, true, 'Anjal' ]

myArr.shift()//remove element from starting
// console.log(myArr)//[ 0, 1, 2, 3, 4, 5, true, 'Anjal' ]

// console.log(myArr.includes(9));//false 

// console.log(myArr.indexOf(9))//-1

const newArr = myArr.join()
// console.log(myArr)//[ 0, 1, 2, 3, 4, 5, true, 'Anjal' ]

// console.log(typeof newArr)//string
// console.log(newArr)//0,1,2,3,4,5,true,Anjal


// slice , splice

console.log("A" , myArr)//A [ 0, 1, 2, 3, 4, 5, true, 'Anjal' ]

const myn1 = myArr.slice(1,3)
console.log(myn1)//[ 1, 2 ]
console.log("B", myArr)//B [ 0, 1, 2, 3, 4, 5, true, 'Anjal' ]

const myn2 = myArr.splice(1,3)
console.log("c", myArr)//c [ 0, 4, 5, true, 'Anjal' ]
console.log(myn2)//[ 1, 2, 3 ]

//Slice vs splice 

/* 
  slice --> slice returns the the part you wanted without including last index

  splice --> returns the part you wanted from array and including the last indes as well as it remove/delete this part from the main array.
*/