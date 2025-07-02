//setInterval(fn, interval)
console.log("Start");
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 1000);
console.log("End");
// Output: Start
//         End
//         Interval 1
//         Interval 2
//         Interval 3
//         Interval 4
//         Interval 5
//         Interval cleared
// To see the output, run this code in a JavaScript environment like a browser console or Node.js.


/*
setInterval(() => {
  console.log("Repeats every second");
}, 1000);
// This will log "Repeats every second" every second until you stop the execution.
// To stop it, you can use clearInterval with the interval ID returned by setInterval.
 */