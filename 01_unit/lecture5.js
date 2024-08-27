//  Primitive  (Call by value - you get the copy of value u don't get the actual reference of it. )

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100  // const score:number = 100; TYPESCRIPT DOES IT!!!!
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  //TYPEOF - object
let userEmail; //(is same as writing let userEmail = undefined )

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false - as both are unique as they are symbol

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)   data types of all np are actually functions

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

/*function(){
   FUNCTION DEFINITION
} */

const myFunction = function(){
    console.log("Hello world");                     // (OBJECT) FUNCTION 
}

console.log(typeof anotherId);    // Symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* JavaScript is a Dynamically Typed Language. 
This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility 
but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the 
cost of some initial verbosity and strictness. */



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   Stack (Primitive) primitive mein value ka copy milta hain  (stack upar)
   Heap (Non-Primitive) non primi/ refrence mein value ka address hi mil jata hain (heap neeche)
*/

/* let myName = "Udit Pradhan"
let anotherName = myName
anotherName = "Newar"

console.log("another name = ", anotherName); //another name =  Newar
console.log ("myName = ", myName);           //myName =  Udit Pradhan
*/

let userOne = {
    email: "user@gmail.com" ,
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "udit@gmail.com"

console.log(userTwo.email) //udit@gmail.com
console.log(userOne.email) //udit@gmail.com

// here both changes as it is an object function and it is 
// stored in heap memory so it gives the refrence point at once 
