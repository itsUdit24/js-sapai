/*
Promises are a modern alternative to callbacks for handling asynchronous operations in JavaScript.
They provide a more structured and readable way to work with asynchronous code.
Here's a brief overview of how Promises work:

1. **Definition**: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

2. **States**: A Promise can be in one of three states:
   - Pending: The initial state, neither fulfilled nor rejected.
   - Fulfilled: The operation completed successfully, and the Promise has a resulting value.
   - Rejected: The operation failed, and the Promise has a reason for the failure (an error).

3. **Creating a Promise**: You can create a Promise using the `Promise` constructor, which takes a function (the executor) as an argument. The executor function receives two arguments: `resolve` and `reject`.
   - `resolve`: Call this function with the result when the operation is successful.
   - `reject`: Call this function with an error when the operation fails.

4. **Consuming a Promise**: You can consume a Promise using the `then` method, which takes two optional callbacks:
   - The first callback is called when the Promise is fulfilled.
   - The second callback is called when the Promise is rejected.

5. **Chaining**: Promises can be chained together, allowing you to perform a series of asynchronous operations in sequence. Each `then` returns a new Promise, which can be used for further chaining.

6. **Error Handling**: You can handle errors in a Promise chain using the `catch` method, which is called when any Promise in the chain is rejected.

Here's an example of using Promises in JavaScript:
*/
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched from server";
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// Output after 2 seconds: Data fetched from server

// In this example, `fetchData` returns a Promise that resolves with the fetched data after 2 seconds.
// The `then` method is used to handle the resolved data, and `catch` is used to handle any potential errors.
// Promises provide a cleaner and more manageable way to handle asynchronous operations compared to callbacks.
// They help avoid "callback hell" and make the code more readable and maintainable.


/* 
// Additionally, you can use `async/await` syntax to work with Promises in a more synchronous style.
// Here's an example of using `async/await` with the previous Promise example:
async function fetchDataAsync() {
  try {
    const data = await fetchData(); // Wait for the Promise to resolve
    console.log(data); // This will log the data fetched from the server
  } catch (error) {
    console.error("Error:", error);
  }
}   
fetchDataAsync();
// Output after 2 seconds: Data fetched from server
// In this example, the `fetchDataAsync` function is declared as `async`, allowing it to use the `await` keyword.
// This makes the code more readable and easier to understand compared to using Promises with `then`.
// Async/await is a modern way to handle asynchronous operations in JavaScript,
// making it look more like synchronous code while still being non-blocking.
// In summary, Promises are a powerful feature in JavaScript that allow you to handle asynchronous operations in a more structured and readable way.
// They help avoid callback hell and make your code easier to maintain.
// Promises are widely used in modern JavaScript development, especially with the rise of frameworks and libraries that rely on asynchronous operations.
// They are a fundamental part of the JavaScript ecosystem and are essential for working with APIs, databases, and other asynchronous tasks.
// Promises are a powerful feature in JavaScript that allow you to handle asynchronous operations in a more structured and readable way.
// They help avoid callback hell and make your code easier to maintain.
// Promises are widely used in modern JavaScript development, especially with the rise of frameworks and libraries that rely on asynchronous operations.
// They are a fundamental part of the JavaScript ecosystem and are essential for working with APIs, databases, and other asynchronous tasks. 

*/