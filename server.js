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

const student ={
    name:`Alex`,
    maths: 93,
    eng:95,
    phy:97,
    getAvg() {
        console.log(`The avgrage of marks is ${(this.maths + this.eng + this.phy)/3}`)
    }
}

student.getAvg()
