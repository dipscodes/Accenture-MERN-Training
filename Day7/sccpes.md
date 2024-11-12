# JavaScript Scopes Explained

## 1. Global Scope

- Variables declared outside any function or block are in the global scope.
- Accessible from anywhere in the code.

**Example**:

```javascript
let globalVar = "I'm a global variable";

function displayGlobalVar() {
  console.log(globalVar); // Accessible here
}

displayGlobalVar(); // Outputs: "I'm a global variable"
console.log(globalVar); // Accessible here as well
```

## 2. Function Scope

- Variables declared inside a function are function-scoped.
- Accessible only within the function they are defined in.

**Example**:

```javascript
function myFunction() {
  let functionScopedVar = "I'm function scoped";
  console.log(functionScopedVar); // Accessible here
}

myFunction(); // Outputs: "I'm function scoped"
console.log(functionScopedVar); // Error: functionScopedVar is not defined
```

## 3. Block Scope

- Introduced with let and const (not var).
- Variables declared inside a { } block are limited to that block.

**Example**:

```javascript
if (true) {
  let blockScopedVar = "I'm block scoped";
  console.log(blockScopedVar); // Accessible here
}

console.log(blockScopedVar); // Error: blockScopedVar is not defined
```

## 4. Lexical Scope

- JavaScript uses lexical scoping, meaning a function’s scope is defined by its location in the source code.
- Inner functions have access to variables in their outer functions.

**Example**:

```javascript
function outerFunction() {
  let outerVar = "I'm in the outer scope";

  function innerFunction() {
    console.log(outerVar); // Accessible here due to lexical scoping
  }

  innerFunction(); // Outputs: "I'm in the outer scope"
}

outerFunction();
```

## 5. Module Scope

- Variables declared in a module are scoped to that module.
- Not accessible from other files unless exported.

**Example**: (in moduleA.js):

```javascript
let moduleScopedVar = "I'm module scoped";

export function showModuleScopedVar() {
console.log(moduleScopedVar);
}
Example (in moduleB.js):

javascript
Copy code
import { showModuleScopedVar } from './moduleA.js';

showModuleScopedVar(); // Accessible if imported
console.log(moduleScopedVar); // Error: moduleScopedVar is not defined
```

## 6. Closures and Scope

- losures allow functions to access variables from an outer function after that outer function has finished executing.
- Useful in creating private variables and functions.

**Example**:

```javascript
function makeCounter() {
  let count = 0; // This variable will be enclosed in the closure

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
```
