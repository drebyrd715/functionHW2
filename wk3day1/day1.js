// function fakeReturn() {
//     console.log('we are calling this function')
//     return 1
//     console.log('hello Abdul')
// }

// console.log(fakeReturn())

// function declaration
// sayHello('Tyra')

// function sayHello(name) {
//     // concatenation
//     console.log('Hello ' + name + '!');
// }

// sayHello('Tyra')

// function expression
// sayHello('Michael')

// const sayHello = function(name) {
//     console.log('Hello ' + name + '!');
// };

// sayHello('Michael')

// console.log(someVariable)
// let someVariable = 'whatever'

// Arrow Function
// implicit return

// add(1,1) // will get an error
// const add = (a, b) => a + b;

function areBothEven(n1, n2) {
    if(typeof n1 === 'number' && typeof n2 === 'number') return !(n1 % 2) && !(n2 % 2)
    // if(!isNaN(n1) && !isNaN(n2)) return !(n1 % 2) && !(n2 % 2);
    return 'One of the arguments is not a number'
}

// edge case
// careful because isNaN does coercion
// console.log(areBothEven(2,4))

// console.log(isNaN(56))

// console.log(!true)

// console.log(typeof 'HELLO')
// console.log(typeof 93)
 
// function computeArea(width, height) {
//     console.log("The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units.");

//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units."
//   }

//   console.log(computeArea(2,4))

// function computeArea(width,height){
//     return "The area of a rectangle with a width of "+width+" and a height of "+height+" is "+(width*height)+" square units";
// }

// console.log(computeArea(4,2));
// function computeArea(width, height) {
//     area = width * height
//     console.log('The area of a rectangle with a width of' + ' ' + width + ' ' + 'and a height of ' + ' ' + height + ' ' + 'is' + ' ' + area + ' square units.')
// }

// computeArea(2, 2)

// function computeArea (width, height) {
//     const area = width * height;
//     // string literal // string interpolation
//     const returnedText = `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`;

//     return returnedText;
// }

// function computeArea(width, height) {
//     if (typeof width === 'number' && typeof height ==='number') {
//         return ( `The area of a rectangle with a width of ${width} and a height of ${height} is: ` + width * height);
//     }
//     return 'Some of the inputs is not a number';
//   }


// function personDetails(name, age, location) {
//     console.log(`Hi my name is ${name} and I live in ${location}.`)
// }

// personDetails('Teo', 32, 'Chicago')

// const maria = console.log(getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery'));

// function getDevObject(name) {
//     // console.log(arguments)
//     // const skills = [];
//     // for (let i = 1; i < arguments.length; i++) {
//     //   skills.push(arguments[i]);
//     // }
//     // console.log(skills)
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

// function setColor(brand, color = 'black') {
//     console.log(color)
// }

// setColor('bicycle', 'red')

// const a = ['red', 'green', 'blue'];

// a.forEach(
//     function(color) {
//         console.log(color);
//     }
// );

// a.forEach((color) => console.log(color))


// a = 'hello'

// .pop()
// .push()

// ===== SCOPE =====
// let a = 4 // global scope

// function foo(x) {
//     let b = a * 4; // function scope
//     console.log("foo", a); // foo 4
//     // console.log('foo', b) // foo 16
//     // console.log('foo', c) ReferenceError: c is not defined
  
//     function bar(y) {
//       let c = y * b; // function scope
//       console.log("bar", a); // bar 4
//       console.log("bar", b); // bar 16
//       console.log("bar", c); // 256
  
//       return c;
//     }
//     return bar(b);
//   }
  
  // foo(3)
  
  // console.log(a) // 4
  // console.log(b) // ReferenceError: b is not defined
  
  // let a = 130
  
  // function varIsWeird() {
  //     var a = 126
  //     console.log(a)
  // }
  
  // console.log(a)
  // varIsWeird()
  
  // if(true) {
  //     let a = 160
  //     console.log(a)
  // }
  
  // console.log(a)
  
  // ===== IIFE =====
  // (function() {
  //     console.log('hello')
  //     let x = 'a'
  // })()
  
  // console.log(x)
  
  // function varTest() {
  //   var x = 1;
  //   if (true) {
  //     var x = 2; // same variable!
  //     console.log(x); // 2
  //   }
  //   console.log(x); // 2
  // }
  
  // function letTest() {
  //   let x = 1;
  //   if (true) {
  //     x = 2; // different variable
  //     console.log(x); // 2
  //   }
  //   console.log(x); // 1
  // }
  
  // varTest()
  // letTest()
  
  // if(true) {
  //     var x = 'yes'
  // }
  
  // console.log(x)
  
//   function openNewAccount(name, openingBalance) {
//       let acctNum = generateAcctNum();
    
//       // createAccount is a function available outside this function
//       let acct = createAccount(acctNum, openingBalance);
//       return acct;
    
//       // helper function that provides a unique account number
//       function generateAcctNum() {
//         return Date.now();  // super amazing algorithm :)
//       }
//     }
  
  // openNewAccount('Gloria', 1000000)
// will get an error: Range Error: Maximum call stack size exceeded
//   function sayHello() {
//     console.log('Hello')
//     sayHello()
//   }
 
//   sayHello()


function printXTimes(n) {
    // the base case
    console.log('current n', n)
    if (n < 0) return;
    // the action
    console.log(`${n} more prints to go`);
    // the recursion call
    printXTimes(n - 1);
}