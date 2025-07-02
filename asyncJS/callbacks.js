// A callback is a function passed to another function to run after it finishes.
// Callbacks are often used in asynchronous operations, like reading files or making network requests.
// They allow you to execute code after a task is completed without blocking the main thread.
// Here's a simple example of a callback function in JavaScript:
function fetchData(callback) {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const data = "Data fetched from server";
    callback(data); // Call the callback function with the fetched data
  }, 2000);
}
// Define a callback function
function handleData(data) {
  console.log(data); // This will log the data fetched from the server
}
// Call the fetchData function and pass the handleData function as a callback
fetchData(handleData);
// Output after 2 seconds: Data fetched from server




/* UNCLOSED COMMENT LINE 
// In this example, `fetchData` simulates fetching data from a server. It takes a callback function as an argument.
// After 2 seconds, it calls the callback function with the fetched data.
// The `handleData` function is defined to handle the data once it's fetched.
// This pattern is common in JavaScript, especially in asynchronous programming.
// Callbacks can also be used with array methods like `forEach`, `map`, and `filter`.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2); // This will log each number multiplied by 2
});
// Output: 2, 4, 6, 8, 10
// In this example, the `forEach` method takes a callback function that is executed for each element in the `numbers` array.
// The callback function logs each number multiplied by 2.
// Callbacks can also be used in event handling, like when a user clicks a button or submits a form.
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!"); // This will log when the button is clicked
});
// In this example, an event listener is added to a button with the ID `myButton`.
// When the button is clicked, the callback function logs "Button clicked!" to the console.
// Callbacks are a fundamental concept in JavaScript and are widely used in various scenarios, especially in asynchronous programming.
// They allow you to write non-blocking code and handle tasks that take time to complete,
//like network requests or file operations, without freezing the main thread.
// However, excessive use of callbacks can lead to "callback hell," where nested callbacks make the code hard to read and maintain.
// To avoid this, you can use Promises or async/await syntax, which provide a
//more structured way to handle asynchronous operations in JavaScript.
// Here's an example of using Promises instead of callbacks:
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Data fetched from server";
      resolve(data); // Resolve the promise with the fetched data
    }, 2000);
  });
}
// Call the fetchDataPromise function and handle the resolved data
fetchDataPromise().then((data) => {
  console.log(data); // This will log the data fetched from the server
});
// Output after 2 seconds: Data fetched from server
// In this example, `fetchDataPromise` returns a Promise that resolves with the fetched data    
// after 2 seconds. The `then` method is used to handle the resolved data, which is more readable than nested callbacks.
// Using Promises or async/await can help you write cleaner and more maintainable asynchronous code in JavaScript.
// Here's an example of using async/await with the previous Promise example:
async function fetchDataAsync() {
  const data = await fetchDataPromise(); // Wait for the Promise to resolve
  console.log(data); // This will log the data fetched from the server
}
// Call the async function
fetchDataAsync();
// Output after 2 seconds: Data fetched from server
// In this example, the `fetchDataAsync` function is declared as `async`, allowing it to use the `await` keyword
// This makes the code more readable and easier to understand compared to using Promises with `then` chaining.  
// Async/await is a modern way to handle asynchronous operations in JavaScript,
// making it look more like synchronous code while still being non-blocking.
// In summary, callbacks are a powerful feature in JavaScript that allow you to handle asynchronous operations.
// They can be used in various scenarios, such as fetching data, handling events, and processing arrays.
// However, for more complex asynchronous code, consider using Promises or async/await for better readability and maintainability.
// Callbacks are a fundamental part of JavaScript, especially in asynchronous programming.
// They allow you to execute code after a task is completed without blocking the main thread.
// While callbacks are useful, they can lead to "callback hell" if not managed properly.
// To avoid this, you can use Promises or async/await syntax, which provide a more structured way to handle asynchronous operations.
// Here's a summary of the key points about callbacks in JavaScript:
// 1. **Definition**: A callback is a function passed to another function to run after it finishes.
// 2. **Asynchronous Operations**: Callbacks are often used in asynchronous operations, such as handling user input, making network requests, or reading files.
// 3. **Error Handling**: Callbacks can also be used for error handling, where the first argument of the callback function is typically an error object (if any).
// 4. **Event Handling**: Callbacks are commonly used in event handling, such as responding to user actions like clicks or form submissions.
// 5. **Array Methods**: Callbacks are used in array methods like `forEach`, `map`, and `filter` to process elements in an array.
// 6. **Callback Hell**: Excessive nesting of callbacks can lead to "callback hell," making code hard to read and maintain.
// 7. **Promises and Async/Await**: To avoid callback hell, you can use Promises or async/await syntax, which provide a more structured way to handle asynchronous operations.
// 8. **Example**: A simple example of a callback function is shown in the code snippet above, where a function fetches data and calls a callback function with the fetched data after a delay.     
// 9. **Best Practices**: Use named functions for callbacks to improve readability, and consider using Promises or async/await for complex asynchronous code.   Use try/catch blocks for error handling in async functions.
// 10. **Browser and Node.js**: Callbacks are widely used in both browser environments and Node.js for handling asynchronous operations.
// 11. **Performance**: Callbacks are non-blocking, allowing the main thread to continue executing while waiting for the callback to be invoked.
// 12. **Compatibility**: Callbacks are compatible with all JavaScript environments, making them a versatile tool for handling asynchronous tasks.
// 13. **Closure**: Callbacks can access variables from their parent scope due to JavaScript's closure feature, allowing them to maintain state between invocations.
// 14. **Chaining**: Callbacks can be chained together to perform a series of asynchronous operations in sequence, although this can lead to callback hell if not managed properly.
// 15. **Use Cases**: Callbacks are commonly used in scenarios like API requests, file I/O operations, and event handling in web applications.  
// 16. **Best Practices**: Use named functions for callbacks to improve readability, and consider using Promises or async/await for complex asynchronous code. 

*/