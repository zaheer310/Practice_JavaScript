// Day1

// const finalResult = ((15+5)*3 - 10) / 4;
// console.log(finalResult)

// let balance = 5000;
// balance += 15000;
// balance -= 8000;
// balance += 5000
// balance -= 3000;
// console.log(balance) 


// // Day 2

// let firstName = "jhon"
// let middleName = "Robert"
// let lastName = "Smith"

// let initials = `${firstName[0]}.${middleName[0]}.${lastName[0]}`
// console.log(initials)

// let password = "pass123"

// // 1. password lenght is atleast 6 characters
// let isLongEnough = (password.length >= 6)? true: false

// // 2.First character is uppercase(between `A` & `Z`)
// let startsWithUppercase = /[A-Z]/.test(password)

// // 3.last character is a digit( 0 - 9)
// let endWithNumber = /[0-9]/.test(password)

// console.log(isLongEnough)
// console.log(startsWithUppercase)
// console.log(endWithNumber)

// // Day 3
// // Discount Calculator

// let amount = 110;
// let isPremium = true;

// if(isPremium)
//     amount = amount*((20/amount)*100)

// else if(amount > 100)
//     amount = amount*((15/amount)*100)
// else if(amount > 50 )
//     amount = amount*((10/amount)*100)
// else
//     console.log(`No Discunt`)

// console.log(`The discount is ${amount}`)

// let num = 30;

// if(num% 5 == 0 && num % 3 ==0 )
//     console.log(`FIZZBUZZ`)
// else if(num % 5 == 0)
//     console.log(`BUZZ`)
// else if(num % 3 == 0 )
//     console.log(`FIZZ`)
// else
//     console.log(num)

// let num = 26;
// if(num % 7 == 0 && num % 2 == 0)
//     console.log(`Special Number`)
// else if(num % 7 == 0)
//     console.log(`Lucky number`)
// else
// console.log(`Regular Number`)

// // Day 4

// let userInput = " HeLLo JaVaScRiPt "
// let cleanInput = userInput.trim().toLocaleLowerCase()
// console.log(userInput)
// console.log(cleanInput)


// let email =  " USER@EXAMPLE.COM ";
// let formattedEmail = email.trim().toLocaleLowerCase();
// console.log(formattedEmail)

// let sentence =  "JavaScript is awesome and JavaScript is fun"
// let word = sentence.indexOf(`awesome`)
// let word1 = sentence.indexOf(`JavaScript`)
// console.log(word)
// console.log(word1)


// let message = "Welcome to coding class"
// console.log(message.indexOf(`coding`))

// // String Slicing
// let fullName = "Alexander Hamilton"
// console.log(fullName.slice(0,9))
// console.log(fullName.slice(10,fullName.length ))


// let phone = "9876543210";
// let areaCode = phone.slice(phone.length - 3, phone.length)
// let lastFour = phone.slice(phone.length -4,phone.length)
// console.log(`Area code : ${areaCode} , Last Four :${lastFour}`)

// replace() method
// let announcement = "The event will happen on Monday and Monday only"
// let updatedAnnouncement = announcement.replace(`Monday`,`Friday`)
// console.log(announcement)
// console.log(updatedAnnouncement)


// let colors = [`red`, `green`, `blue`,`yellow`]
// console.log(colors)
// console.log(colors[0])
// console.log(colors[colors.length -1] )
// console.log(colors.length)

// let scores = [ 85,92,78,90,88]
// console.log(scores[2])
// scores[0] = 95
// console.log(scores)
// console.log(scores[0] + scores[1])


// Array methods(push,pop,shift,unshift)
// let queue = [`First`,`Second`,`Third`];
// let removedElem = queue.shift()
// queue.push(`Fourth`)
// let secondRemovedElem = queue.shift()
// console.log(queue)

// Search Methods(indexOf,includes)

// let fruits =["apple", "banana", "mango", "orange", "banana"]
// console.log(fruits.indexOf(`mango`))
// console.log(fruits.indexOf(`apple`))
// console.log(fruits.indexOf(`grapes`))

// let inventory = ["laptop", "mouse", "keyboard", "monitor"]
// console.log(inventory.includes(`mouse`))
// console.log(inventory.includes(`printer`))

// let morningClasses = ["Math", "English", "Science"]
// let afternoonClasses = ["History", "Art", "PE"]
// let fullSchedule = morningClasses.concat(afternoonClasses)
// console.log(fullSchedule)


// reverse()

// let morningClasses = ["Math", "English", "Science"]
// let afternoonClasses = ["History", "Art", "PE"]
// let fullSchedule = morningClasses.concat(afternoonClasses)
// let reversedArray =fullSchedule.reverse()
// console.log(reversedArray)

// splice() method

// let students = [`Alice`,`Bob`,`Charlie`,`David`,`Eve`]
// students.splice(2,1)
// students.splice(2,0,`Frank`,`Grace`)
// console.log(students)


// // Array Refrences
// let original1 = [1,2,3]
// let refrence = original1
// refrence[0] = 99
// console.log(original1)
// console.log(refrence)
// console.log(original1 == refrence) // true

// let original = [1,2,3]
// let refrence1 = [1,2,3]
// console.log(original === refrence) // false

// Nested Arrays
// let scores = [
//     [`Alice`,85,90,92],
//     [`Bob`,78,85,92],
//     [`Charlie`,92,88,95]
// ]

// console.log(scores[0][2])
// console.log(scores[2][0])
// console.log(`The avg marks of Charlie are ${Math.floor((scores[2][1] +scores[2][2] +scores[2][3])/3) }`)

// scores[1][1] = 82
// console.log(scores[1])

//  Day 5

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// for(let i =1; i <= 4; i++){
//     let row = ``;
//     for(let j = 1; j <= 4; j++){
//         row += j
//        }
//        console.log(row)
// }

// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// for(let i = 1; i<= 5; i++){
//     let row = ``
//     for(let j= 1 ;j <= i; j++ ){
//         row += `*`
//     }
//     console.log(row)
// }

// Write a while loop  
// let i = 0;
// while(i <= 10){
//     console.log(i)
//     i++;
// }

// Write a while loop that keeps adding numbers (1, 2, 3, 4...) to a sum until the sum reaches or exceeds 50. Print the final sum and how many numbers were added.
// let sum = 0;
// let i = 0;
// while(sum < 50){
//     i++;
//     sum += i;
// }
// console.log(`The sum: ${sum}`)
// console.log(`Added numbers ${i}`)

// do while loop
// Write a for loop that searches for the first number divisible by both 3 and 5 between 1 and 100. Use break to stop once found.
// let i =1;
// do{
// if(i%3 == 0 && i%5 == 0 ){
//     console.log(`The first number divisible by both 3 and 5 between 1 and 100 is ${i}`)
//     break
// }
//     i++
// }while(i <= 100)


// // for of loop for arrays
// // Use a for...of loop to count how many vowels (a, e, i, o, u) are in the sentence below. Print the count.
// let sentence = "JavaScript is awesome";
// let lowSentence = sentence.toLocaleLowerCase()
// let count =0;
// for(let vowel of lowSentence){
//     if(vowel === `a` || vowel === `e` || vowel === `i` || vowel === `o` || vowel === `u`  )
//         count ++;
// }
// console.log(`The number of vowels in the sentence are ${count}`)


// Write a for loop that prints numbers from 1 to 30. But:
// .) For multiples of 3, print "Fizz" instead of the number
// .) For multiples of 5, print "Buzz" instead of the number
// .) For multiples of both 3 and 5, print "FizzBuzz"

// for(let i =1; i <= 30 ; i++){
//     if(i % 5 == 0 && i%3 ==0)
//         console.log(`FizzBuzz -${i}`)
//     else if(i % 5 == 0)
//         console.log(`Buzz -${i}`)
//     else if(i % 3 == 0)
//         console.log(`Fizz -${i}`)
//     else
//         console.log(i)
// }


// //Reverse of an Array

// let original = [10,20,30,40,50,60]
// let temp =0
// for(let i =0 ; i <= (original.length)/2 ; i++){
//     temp = original[original.length - i -1]
//     original[original.length - i -1] = original[i]
//     original[i] = temp
// }
// console.log(original)


// Day 6
// objects

// // objecys of objects
// let classroom = {
//     teacher:{name:`Ms.Smith`,subject:`Maths`},
//     student1:{name:`Alice`,grade :`A`},
//     student2:{name:`Bob`,grade :`B+`}
// }


// array of objects

// let products ={
//     product1:{id:101, name:`Phone`},
//     product2:{id:102, name:`Laptop`},
//     product3:{id:103, name:`Tablet`},
// }
// delete products.product1.name
// console.log(products)



// Maths Objects

// Math.PI, Math.pow(a,b)= a^b , Math.abs(-34) = 34
// Math.floor(4.9) = 4 , Math.ceil(4.1) = 5


// Random integer


// // Random integer between 0 to 1
// let randomValue = Math.random()
// console.log(randomValue)

// // Random number between 0 to 10
// let randomValue = Math.random()*10
// console.log(randomValue)

// // Generating random variables from 1 to 10
// let randomVariable = 1+ Math.floor(Math.random() * 10)
// console.log(randomVariable)



// // Combined Concepts - Objects and Random

// let players = [
// { name: "Alice", score: 0 },
// { name: "Bob", score: 0 },
// { name: "Charlie", score: 0 }
// ];

// console.log(players[0].score = 1+ Math.floor(Math.random()*6))
// console.log(players[1].score = 1+ Math.floor(Math.random()*6))
// console.log(players[0].score = 1+ Math.floor(Math.random()*6))

// Math.floor(Math.random() * (max - min + 1)) + min 

// let product = [
//     { name: "Phone", price: 20000, discount: 0 },
//     { name: "Laptop", price: 50000, discount: 0 }
// ]

// // Generate a random discount between 5 and 20 for the Phone
// let pDiscount =  5 + Math.floor(Math.random()*16)
// // Generate a random discount between 5 and 20 for the Laptop

// let LDiscount =  5 + Math.floor(Math.random()*16)
// console.log(pDiscount +"," + LDiscount)


// Practical Random Applications
// let colors = ["red", "green", "blue", "yellow", "purple"]
// let length = colors.length -1
// console.log(colors[Math.floor(Math.random() * (length - 0 + 1)) + 0])


//Nested Objects with Random Values

// let game = {
// player1: { name: "Alice", health: 100, damage: 0 },
// player2: { name: "Bob", health: 100, damage: 0 }
// };

// // Generate random damage for player1 (10 to 30)
// console.log(`The random damage for player 1 : ${game.player1.damage = Math.floor(Math.random()*(30 -10 +1 ) + 10)}`)
// // Generate random damage for player2 (10 to 30)
// console.log(`The random damage for player 2 : ${game.player2.damage = Math.floor(Math.random()*(30 -10 +1) + 10)}`)
// // Print both players with their damage values


// let students = [
// { name: "Emma", math: 0, science: 0 },
// { name: "Liam", math: 0, science: 0 },
// { name: "Olivia", math: 0, science: 0 }
// ];

// for(let i = 0; i< 3 ; i++){
//     students[i].math = Math.floor(Math.random()*(100 -60 + 1)+ 60)
//     students[i].science = Math.floor(Math.random()*(100 - 60 + 1) + 60 )
// }

// console.log(students)



// Create a lottery system: 

// Create an array tickets = []
let ticket = []
// Generate and push 5 random ticket numbers (1000 to 9999) into the array
for(let i = 0 ; i< 5 ; i++)
ticket.push(Math.floor(Math.random()*(9999 - 1000 + 1) + 1000))
// Print all ticket numbers
console.log(ticket)
// Generate one winning number (1000 to 9999) and print it

let winner = ticket[Math.floor(Math.random()*((ticket.length -1 ) - 0 + 1) + 0)]
console.log(`The Winner is : ${winner}`)
