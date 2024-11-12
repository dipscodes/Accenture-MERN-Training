# ECMAScript 6

ECMAScript 6 (also known as ES6 or ECMAScript 2015) introduced several important features that significantly improved JavaScript. Below are the key changes in detail:

1. **Let and Const**

- **`let`** : Introduced block-scoped variable declarations. Unlike `var`, `let` is limited to the block (or statement) in which it is defined, preventing unintended behaviors due to variable hoisting.

- **`const`** : Introduced for declaring constants. Once a variable is assigned a value using `const`, it cannot be reassigned, providing immutability for the variable (but the value itself may still be mutable if it's an object or array).

```javascript
let x = 10;
x = 20; // Valid

const y = 30;
y = 40; // Error: Assignment to constant variable.
```

2. **Arrow Functions**

- Arrow functions provide a shorter syntax for writing functions and also retain the value of `this` from the surrounding lexical context, unlike traditional functions, which redefine `this` based on how they are called.

```javascript
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;
```

3. **Template Literals**

- Template literals allow for embedded expressions and multi-line strings. They are denoted by backticks (```) and can include placeholders like `${}` to embed variables or expressions directly within a string.

```javascript
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```

4. **Destructuring**

- Destructuring assignment makes it possible to unpack values from arrays or properties from objects into distinct variables.
  **Array Destructuring:**

```javascript
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); // Output: 1, 2
```

**Object Destructuring:**

```javascript
const obj = { name: "John", age: 30 };
const { name, age } = obj;
console.log(name, age); // Output: John, 30
```

5. **Default Parameters**

- You can now assign default values to function parameters, which are used if no argument is provided for that parameter.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

6. **Rest and Spread Operators**

- **Rest operator (`...`)** is used to collect multiple elements into a single array or object.

- **Spread operator (`...`)** is used to spread elements from an array or object into individual elements.
  **Rest in Functions:**

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
```

**Spread in Arrays:**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
```

**Spread in Objects:**

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```

7. **Classes**

- ES6 introduced a formal class syntax for defining objects, which is syntactic sugar over JavaScript’s prototype-based inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice.
```

8. **Modules**

- ES6 introduced native support for modules, allowing you to import and export code across different files. This helps in organizing large applications.

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from "./math.js";
console.log(add(2, 3)); // Output: 5
```

9. **Promises**

- Promises allow asynchronous code to be written in a more manageable way, avoiding "callback hell" by providing `.then()` and `.catch()` for handling success and failure.

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

10. **Iterators and Generators**

- **Iterators** provide a way to define custom iteration behavior (such as loops) for objects.

- **Generators** are functions that can be paused and resumed, allowing for more efficient handling of asynchronous operations.
  **Iterator Example:**

```javascript
const obj = {
  values: [1, 2, 3],
  *[Symbol.iterator]() {
    for (let value of this.values) {
      yield value;
    }
  },
};

for (let val of obj) {
  console.log(val); // Output: 1 2 3
}
```

**Generator Function Example:**

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
```

11. **Map, Set, WeakMap, and WeakSet**

- **Map** and **Set** provide new data structures:

  - **Map** : A collection of key-value pairs.

  - **Set** : A collection of unique values.

```javascript
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // Output: 1
```

```javascript
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(2)); // Output: true
```

- **WeakMap** and **WeakSet** are similar but with the difference that the values (in **WeakMap** ) or elements (in **WeakSet** ) are held weakly, meaning they are garbage-collected when no longer in use.

12. **Symbol**

- **Symbol** is a primitive data type that is unique and immutable. It is often used for creating unique object property keys.

```javascript
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // Output: false
```

13. **Set and Array Iteration**

- ES6 introduced a number of new methods for iteration over collections like `forEach`, `map`, `filter`, `reduce`, etc., which are now more widely used for cleaner, more functional-style code.

14. **Object.assign()**

- `Object.assign()` is used to copy all properties from one or more source objects to a target object.

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }
```

15. **New Built-in Methods**

- A number of new methods were introduced for working with strings, arrays, and objects, such as `Array.from()`, `Array.find()`, `String.includes()`, `Object.entries()`, etc.

16. **Tail Call Optimization (TCO)** (Not implemented in all JavaScript engines yet)

- Tail call optimization is a feature that allows certain recursive functions to be optimized, preventing stack overflow by reusing the current stack frame.

These changes made JavaScript much more powerful, expressive, and easier to write, as well as providing better support for modern development practices, especially for asynchronous and object-oriented programming.
