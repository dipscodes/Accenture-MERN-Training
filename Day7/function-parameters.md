# Function Parameters

JavaScript function parameters and related tricks offer a lot of flexibility, making it essential to understand the various ways you can handle arguments and parameters in functions. Here’s an overview of **function parameters** , along with common tricks and examples.1. **Basic Function Parameters**
A function in JavaScript can accept one or more parameters (also called arguments).

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
```

1. **Default Parameters**
   You can assign default values to function parameters in case they are not provided.

```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest
greet("Bob"); // Output: Hello, Bob
```

3. **Rest Parameters**
   The rest parameter allows you to represent an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10)); // Output: 15
```

4. **Spread Syntax in Function Calls**
   While the rest parameter is used in function definitions, the spread syntax is used when calling a function to pass elements of an array as individual arguments.

```javascript
function greet(name, age) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person = ["Alice", 30];
greet(...person); // Output: Hello, Alice. You are 30 years old.
```

5. **Destructuring Function Parameters**
   You can destructure objects and arrays directly in the parameter list.
   **Object Destructuring:**

```javascript
function displayPerson({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const person = { name: "Alice", age: 30 };
displayPerson(person); // Output: Alice is 30 years old.
```

**Array Destructuring:**

```javascript
function displayCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

const coords = [10, 20];
displayCoordinates(coords); // Output: X: 10, Y: 20
```

6. **Function Parameter Length** You can use the `arguments` object in functions to get all passed arguments, even if the function isn't using rest parameters. However, the `arguments` object is not available in arrow functions.

```javascript
function displayArgs() {
  console.log(arguments); // Returns all arguments passed to the function
}

displayArgs(1, 2, 3); // Output: [1, 2, 3]
```

7. **Arrow Functions and Parameters** Arrow functions do not have their own `arguments` object. They inherit `this` from the surrounding scope, making them different from regular functions.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

8. **Parameters in Arrow Functions**
   You can write arrow functions in multiple ways:

- **One parameter:**

```javascript
const square = (x) => x * x;
console.log(square(5)); // Output: 25
```

- **No parameters:**

```javascript
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!
```

9. **Function Overloading (Using Default and Rest Parameters)**
   JavaScript does not support function overloading like some other languages, but you can achieve similar functionality by using default parameters and checking argument types.

```javascript
function add(a, b = 0) {
  if (Array.isArray(a)) {
    return a.reduce((total, num) => total + num, 0);
  }
  return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add([1, 2, 3, 4])); // Output: 10
```

10. **Callbacks and Higher-order Functions** Functions can accept other functions as arguments. This is commonly seen in event handling or asynchronous code (e.g., `setTimeout`, `setInterval`).

```javascript
function executeCallback(callback) {
  callback();
}

executeCallback(() => console.log("Callback executed")); // Output: Callback executed
```

11. **Anonymous Functions and Function Expressions**
    You can pass anonymous functions directly as arguments to other functions.

```javascript
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);
```

12. **Named vs. Anonymous Functions as Parameters**
    You can pass both named and anonymous functions as parameters.

```javascript
function logMessage(message) {
  console.log(message);
}

function doSomething(callback) {
  callback("Hello from callback!");
}

doSomething(logMessage); // Output: Hello from callback!
```

13. **Passing Objects as Parameters**
    Objects can be passed as parameters, allowing for complex data structures to be used.

```javascript
function createPerson({ name, age }) {
  return { name, age };
}

const person = createPerson({ name: "Alice", age: 30 });
console.log(person); // Output: { name: 'Alice', age: 30 }
```

14. **Function Parameter "Type Checking"**
    While JavaScript is dynamically typed, you can still manually check the types of parameters within functions.

```javascript
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

console.log(add(5, 10)); // Output: 15
// console.log(add(5, "10")); // Throws error
```

15. **Currying**
    Currying is a functional programming technique where a function returns another function that accepts the next argument.

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // Output: 10
```

16. **IIFE (Immediately Invoked Function Expression)**
    You can create functions that are executed immediately after being defined.

```javascript
(function () {
  console.log("This runs immediately!");
})();
```

17. **Function Binding** The `bind` method allows you to create a new function that, when called, has its `this` value set to a specific object.

```javascript
function greet() {
  console.log("Hello, " + this.name);
}

const person = { name: "Alice" };
const greetAlice = greet.bind(person);
greetAlice(); // Output: Hello, Alice
```

### Conclusion

These are some of the core concepts and tricks when it comes to function parameters in JavaScript. Mastering them will help you write more concise and flexible code. Let me know if you want to dive deeper into any specific topic!
