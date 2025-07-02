console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");
// Output: Start
//         End
//         Timeout

// To see the output, run this code in a JavaScript environment like a browser console or Node.js.
// to run via Node.js, save the code in a file (e.g., setTimeout.js) and execute `node setTimeout.js` in the terminal.