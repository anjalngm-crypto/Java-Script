// console.log(Temporal.Now.instant())

//Dates 

let myDate = new Date()//Date is an non primitive object
// console.log(myDate.toString());//Tue Mar 10 2026 05:03:28 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());//Tue Mar 10 2026

// console.log(myDate.toLocaleDateString())//3/10/2026

// console.log(myDate.toLocaleString())//3/10/2026, 5:07:06 AM

// console.log(typeof myDate)//object

let myCreatedDate = new Date(2026,7,16)

// console.log(myCreatedDate.toLocaleDateString())//8/16/2026 months start with 0.

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);//o/p will be in milliseconds from 1970 till current executed time
// console.log(myCreatedDate.getTime());// it also give o/p in ms but till current date

// console.log(Math.floor(Date.now()/1000));//convert ms-->seconds

let newDate = new Date()
// console.log(newDate)//2026-03-10T05:31:25.086Z

// console.log(newDate.getDay())//2 due to tuesday

// console.log(newDate.getMonth())//2 due to march and months start from 0

newDate.toLocaleString('default', {
    weekday: "long",})//Internationalsiation and customization