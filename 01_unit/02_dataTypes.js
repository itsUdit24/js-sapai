"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // but code readability should be high

console.log("UDIT")


let name = "udit"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value  (example can be temperature app, where if the server is down or some issue is there if it returns 0 which is equivalent to a temperature so it should return null in that case.)
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//object ->  key : value
const student ={    //student is an object now
    fullName : "Udit Pradhan",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

//how to access key's in object
// 1) obj.key
// 2) obj["key"]
console.log(student.fullName)
console.log(student["cgpa"])

//HOW TO UPDATE A VALUE IN OBJECT
student.age +=1;  // (OR)  student["age"] = student["age"] + 1;
console.log(student.age) // (OR) console.log( student["age"];)


