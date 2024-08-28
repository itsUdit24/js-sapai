
const score = 400
// console.log(score);  // 400

const balance = new Number(100)
// console.log(balance);  // [Number: 100]

// console.log(balance.toString().length);  // will become string and length of string is 3
// console.log(balance.toFixed(2));         //100.00

const otherNumber = 123.8966                    //23.8966, for 3 will be 23.9
                    // (3) -> 124
// console.log(otherNumber.toPrecision(4)); //123.9

const num2 = 1123.8966
console.log(num2.toPrecision(3)); //1.12e+3,  -> ye lo 3 precision value bakki exponential mein deta hu

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // IN, cuz bydefault it is set to U.S standard

// ********     Number. (various functions) - was done in console.   ********  

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
