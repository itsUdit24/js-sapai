function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Udit", () => console.log("Callback ran"));
// Output: Hello, Udit
//         Callback ran
// In this example, the `greet` function takes a name and a callback function as arguments.
// It logs a greeting message and then calls the callback function.
