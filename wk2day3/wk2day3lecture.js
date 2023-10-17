// define instantiated varibale named num
// let num = -5;
// console.log(num)
// if (num > 0) {
// console.log("positive");
// }
// else {
// console.log("negative");
// }

// num = 66
// console.log(num)

// age restriction site
// var age = 11; 
// check if over 18
// if(age >= 18) {
//then access granted
// console.log("access granted")
// } else {
//     console.log("Access denied");
// }

// Declare a variable
// let num = 100

// if (num > 0) {
//     if (num === 100){
//         console.log("equals 100")
//     } else if(num > 100) {
//         console.log ('greater than 100')
//     } else is ('number positive & less than 100')
//     if(num > 100) {
//         console.log("greater than 100")
//     }
// } else {
//     console.log('negative')
// }


// if (num > 100){
//     console.log('greater than 100');
// } else if (num > 0 && num <100) {
//     console.log('positive number less than 100')
// } else {
//     console.log("number is negative")
// }

//What is our letter grade?
// let grade = 100 
// if (grade >= 90) {
//     console.log('A');
// } else if (grade >= 80 && grade <= 90) {
//     console.log('B')
// } else if (grade >= 70 && grade <= 80) {
//     console.log('C')
// } else if (grade >= 60 && grade <= 70){
//     console.log('D')
// } else {
//     console.log('F')
// }

//Loops
// first declare a variable; then we set a conditional with variable; we increment variable
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// Loop that counts from 10 down to 1
// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }

// write a for loop for the given output: 1,3,5,7,9,2,4,6,8,10
// for (let i = 1; i <=10; i = i + 2){
//     console.log(i)
//     if ( i === 9){
//       i = 0
//     }
// }

// create a loop that outputs multiples of 3 starting at 6 ending at 60
// for (let i = 6; i <= 60; i = i+3){
//     console.log(i)
// }

// write a loop for the given output: #,##,###,####,#####,######,#######
// for (let i = 1; i <= 7; i++){
//     let string = " "
//     for (let j = 1; j <= i; j++){
//         string += "#"
//     }
//     console.log(string)
// }

// Remainder Operator -% (modules) Print Even Numbers
// for (let i = 0; i <= 10; i++){
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// create output for even,odd,prime numbers up tp 20
// for (let i = 1; i <= 20; i++) {
//     if (i <= 3) {
//       if (i % 2 === 0) {
//         console.log(i + ' is even');
//       } else {
//         console.log(i + ' is odd');
//       }
//     } else {
//       if (i % 2 === 0) {
//           console.log(i + ' is even');
//         } else if (i % 3 !== 0 ) {
//           console.log(i + ' is prime');
//         } else {
//           console.log(i + ' is odd');
//         }
//     }
//   }

//Arrays (Comma separated list)
// let colors = ["red", "green", "blue"]
let movies = ["Scarface", "The Dark Knight", "Blue Streak"]
// console.log(movies)

// Add movies to then of Array
movies.push("Inception", "TheGreat Gatsby")
// console.log(movies)

// Add movies to front of Array
movies.unshift("Goosebumps")
// console.log(movies)

// Remove element from end of Array
movies.pop()
// console.log(movies)

// Remove element from beginning of Array
movies.shift()
// console.log(movies)

// Add/Remove Elements to/from Anywhere in Array
movies.splice(1,0,  "Hubie Halloween", "Happy Feet")
// console.log(movies)

// Interate Over All of the Elements in an Array (Elements on individual lines)
movies.forEach(function(movie){
//     console.log(movie)
})
//Index for each Element                                        
movies.forEach(function(movie, i){
//     console.log(movie + " is at index " + i )
})
// for... of loop 
for (let movie of movies){
//     console.log(movie)
//     if (movie == "The Dark Knight") {
//         break;
    }

//Spread Operator
let newArray = [...movies, "fastball", "hackerman"]

console.log(newArray.join(" "))
newArray.join(" ")


