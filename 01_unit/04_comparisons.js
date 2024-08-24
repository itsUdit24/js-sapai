// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* 
The reason is that the an equality check == and comparisons > < >= <= works differently.
Comparisons converts null to a number, treating it as so (so basically null = 0)
That's why (3) null >= 0 is true and (1) null > 0  is false
*/

console.log(undefined == 0); // all false
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);  //strict check