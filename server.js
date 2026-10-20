// function avgNumber(a,b,c){

//     return (`The average of three numbers is ${(a+b+c)/3}`)
//     console.log("wedfcw")
// }

// let avg = avgNumber(2,3,4)
// console.log(avg)
// console.log(typeof(avg))

// const multiply = function mul(a,b){
//     return a*b
// }

// console.log(multiply(2,3))  

// function reapeatTask(func){
//     for(let i = 0 ; i<=10;i++)
//         func()
// }

// function alertUser(){
//     console.log("Alert User")
// }
// reapeatTask(alertUser)

// function applyDiscoce)
// }unt(func,price){
//     return func(pri

// const tenPercent = (price) => price*0.9;
// const twentyPercent = (price) => price*0.8;

// console.log(applyDiscount(tenPercent, 1000));
// console.log(applyDiscount(twentyPercent , 1000));



// // function accepts another function as parameter
// const N = (func)=>{
//     for(let i  = 1; i<= 10; i++ )
//         func()
// }

// function alertUser(){
//     console.log(`Alert User`);
// }

// N(alertUser)

// // function return function as a result 

// const createMultiplier =(Number)=>{
//     return function(number) {
//         return number*Number
//     }
// }

// const double = createMultiplier(2)
// const triple =  createMultiplier(3)

// console.log(double(5));
// console.log(triple(5));

// const mathObj = {
//     sum(a,b){
//        return a+b
//     }
// }
// let result = mathObj.sum(2,3)
// console.log(result);

// function avg(a,b){
//     console.log(`Sum of number 5`);
// }

// console.log(avg())

// higher order function
// function higher(func){
//     for(let i = 0; i<= 10; i++)
//         func()
// }

// function lower(){
//     console.log(`Lower`);
// }

// higher(lower)

// const multiplier = function (func,number){

//     return func(number)
// }

// const double = (number) => number*2;
// const triple = (number) => number*3;

// console.log(`The double of a number is ${multiplier(double,5)}`);
// console.log(`The triple of a number is ${multiplier(triple,5)}`);

// const multplier = function(Number){
//     return function(number){
//         return number*Number
//     }
// }

// const double =  multplier(2);
// const triple =  multplier(3);

// console.log(`The double of a number is ${double(5)}`)
// console.log(`The triple of a number is ${triple(5)}`)

// const student ={
//     name:`Alex`,
//     maths: 93,
//     eng:95,
//     phy:97,
//     getAvg() {
//         console.log(`The avgrage of marks is ${(this.maths + this.eng + this.phy)/3}`)
//     }
// }

// student.getAvg()

// Array Methods 

// // forEach() Method
// let arr = [2,3,4,5];
// arr.forEach(element => {
//     if(element > 2)
//         console.log(`Greater than 2 ::${element}`)
//     else
//         console.log(`Less than 2 ::${element}`)
// });

// // Map Method
// let updatedArray = arr.map(elem => elem >2)
// console.log(updatedArray)

// // filter Method

// let arr1 = arr.filter(e => e > 2)
// console.log(arr1)

// let isAllGreater = arr.every(el => el > 2)
// console.log(isAllGreater)

// let isSomeGreater = arr.some(ele => ele > 2)
// console.log(isSomeGreater)

// let totalResult = arr.reduce((sum,eleme) => sum*eleme)
// console.log(totalResult)

// Default parametr 
function greetUser (name = "User"){
     console.log(`Good Evening ${name}`)
}

greetUser()
greetUser(`Zaheer`)

// Spread Operator
let num = [ 1,2,3]
let bigArr = [...num,4,5]
console.log(bigArr)

// Rest Operator 
function sum (...nums){
    //  nums is the array
    let total = nums.reduce((sum,elem) => sum+elem )
    console.log(total)
} 
sum(1,2,3,4)

// // Array destructuring 

// let fruits = [`Mango`,`Apple`,`Banana`]
// let [fruit ,d, c] = fruits
// console.log(fruit , d, c)

// Object Destructuring 
let obj = {
    name:`Zaheer`,
    Roll: 122
}

let {name , Roll } =  obj
console.log(name, Roll)