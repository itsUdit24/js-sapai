// array
/*
SHALLOW COPIES - copy of an object is a copy whose properties share the same refrences 
 (heap mein jo store hotah hain woh value ka address hi de deta hain- non primitve or reference datatypes)
 DEEP COPIES - do not share the same references 

 ->> In JS array copy operations create shallow copies

*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)    9 will be added at front- time consuming as we are shifting each elements backwards by 1
// myArr.shift()       no parameters is passed front element is removed 

// console.log(myArr.includes(9));   ->>> false
// console.log(myArr.indexOf(3));    ->>> indexOf(9) = -1 but here is 3 which exists so output will be 3, stating element 3 is present at index 3

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr)    ->>> String

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // doesn't includes the range and no change in initial array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // the mentioned range will not be given
console.log("C ", myArr);
console.log(myn2); // the range mentioned will be there in original array rest wil be deleted
