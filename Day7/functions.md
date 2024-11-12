# JavaScript Functions Explained

JavaScript functions are fundamental building blocks of the language. Here’s an overview of the different types of functions in JavaScript and when to use each type.

## 1. Function Declarations

- A **Function Declaration** is the traditional way of defining functions in JavaScript.
- It uses the `function` keyword followed by the function name, parameters (optional), and the function body.
- Function declarations are **hoisted**, meaning they are moved to the top of their scope during compilation, allowing you to call the function before its declaration in the code.

**Example**:

```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function call before declaration due to hoisting
console.log(greet("Alice")); // Outputs: "Hello, Alice!"
```

## 2. Function Expressions

- A **Function Expression** is a function that is defined within an expression and assigned to a variable.
- Unlike function declarations, function expressions are **not hoisted**, meaning they can only be called after the function has been defined in the code.

**Example**:

```javascript
// Function Expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Function call
console.log(greet("Bob")); // Outputs: "Hello, Bob!"
```

## 3. Arrow Functions

- **Arrow Functions** provide a concise syntax for writing functions in JavaScript.
- They are defined using the `=>` syntax and do not have their own `this` context; instead, they inherit `this` from the outer scope.
- Arrow functions are commonly used for short functions, especially in callbacks and array methods like `map`, `filter`, etc.

**Example**:

```javascript
// Arrow Function
const greet = (name) => `Hello, ${name}!`;

// Function call
console.log(greet("Charlie")); // Outputs: "Hello, Charlie!"
```

## 4. Immediately Invoked Function Expressions (IIFE)

- An **Immediately Invoked Function Expression (IIFE)** is a function that is executed immediately after being defined.
- It is often used to create a local scope, preventing variables from polluting the global scope.
- IIFEs are defined using a function expression wrapped in parentheses, followed by another set of parentheses to invoke it.

**Example**:

```javascript
// Immediately Invoked Function Expression (IIFE)
(function () {
  let message = "This is an IIFE!";
  console.log(message); // Outputs: "This is an IIFE!"
})();
```

## 5. Higher-Order Functions

- A **Higher-Order Function** is a function that either accepts one or more functions as arguments or returns a function.
- Higher-order functions are often used in functional programming for tasks like mapping, filtering, or reducing data.

**Example**:

```javascript
// Higher-Order Function
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
console.log(applyOperation(5, 3, add)); // Outputs: 8
```

## 6. Callback Functions

- A **Callback Function** is a function that is passed as an argument to another function and is executed after the completion of that function.
- Callback functions are commonly used in asynchronous programming to handle results after a task is completed, such as when dealing with events or API calls.

**Example**:

```javascript
// Callback Function
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((message) => {
  console.log(message); // Outputs: "Data fetched" after 1 second
});
```

## 7. Recursive Functions

- A **Recursive Function** is a function that calls itself in order to solve a problem. It divides the problem into smaller subproblems, which are solved recursively until a base case is reached.
- Recursion is commonly used for tasks such as calculating factorials, traversing data structures, and more.

**Example**:

```javascript
// Recursive Function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Outputs: 120
```

## 8. Generator Functions

- **Generator Functions** are special functions that can pause execution and resume later, allowing the function to return multiple values over time using the `yield` keyword.
- Generator functions are defined with an asterisk (`*`) after the `function` keyword, and they return a generator object that can be iterated over.

**Example**:

```javascript
// Generator Function
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = countUp();
console.log(counter.next().value); // Outputs: 1
console.log(counter.next().value); // Outputs: 2
console.log(counter.next().value); // Outputs: 3
```

## Summary Table of Function Types

| Function Type              | Description                                                               |
| -------------------------- | ------------------------------------------------------------------------- |
| Function Declaration       | Traditional function, hoisted, uses `function` keyword                    |
| Function Expression        | Assigned to a variable, not hoisted                                       |
| Arrow Function             | Concise syntax, does not have its own `this`                              |
| Immediately Invoked (IIFE) | Runs immediately, useful for creating a local scope                       |
| Higher-Order Function      | Accepts other functions as arguments or returns functions                 |
| Callback Function          | Passed as an argument to another function, often for async operations     |
| Recursive Function         | Calls itself, useful for tasks like factorials and tree traversal         |
| Generator Function         | Uses `yield` to produce a sequence of values, allows pausing and resuming |
