# Objects in Details

In JavaScript, objects are key-value pairs where the keys (also called properties) are strings (or Symbols) and the values can be any data type. JavaScript objects are fundamental in the language, and understanding them is crucial for working effectively with JavaScript.

Here’s a comprehensive breakdown of everything you need to know about objects in JavaScript:

1. **What is an Object in JavaScript?**
   An object in JavaScript is a collection of key-value pairs where each key is a string (or a Symbol) and the value can be any data type, including other objects, arrays, functions, primitive types, etc.

#### Syntax:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("Hello!");
  },
};
```

2. **Creating Objects**

#### Using Object Literals

```javascript
const person = {
  name: "Alice",
  age: 25,
};
```

Using the `new Object()` Syntax

```javascript
const person = new Object();
person.name = "Bob";
person.age = 28;
```

#### Using a Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Charlie", 22);
```

3. **Types of Object Keys**

- **String** (or coerced to string): All property keys in JavaScript objects are automatically converted to strings.

```javascript
const obj = {
  name: "Alice",
};
```

- **Symbol** : A unique and immutable data type used for creating object keys.

```javascript
const sym = Symbol("id");
const obj = {
  [sym]: 123,
};
```

4. **Object Properties**
   Object properties can be:

- **Data Properties** : Standard key-value pairs.

- **Accessor Properties** : Defined using getters and setters.

#### Accessor Properties Example:

```javascript
const obj = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
```

5. **Accessing Object Properties**
   There are two common ways to access properties:

- **Dot Notation**

```javascript
console.log(person.name); // Alice
```

- **Bracket Notation** (useful when the property name contains spaces or is dynamic)

```javascript
console.log(person["name"]); // Alice
```

6. **Object Methods**
   Objects can contain methods, which are functions that are part of an object.

```javascript
const person = {
  name: "Jane",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet(); // Hello, Jane
```

7. **Object Prototypes** Every JavaScript object has a prototype. The prototype is another object that it inherits properties and methods from. You can access an object's prototype with `Object.getPrototypeOf()` or via `__proto__` (deprecated).

#### Example:

```javascript
const person = { name: "Alice" };
const proto = Object.getPrototypeOf(person);
console.log(proto); // Object.prototype
```

8. \*\*
   In JavaScript, objects are key-value pairs where the keys (also called properties) are strings (or Symbols) and the values can be any data type. JavaScript objects are fundamental in the language, and understanding them is crucial for working effectively with JavaScript.

Here’s a comprehensive breakdown of everything you need to know about objects in JavaScript:

1. **What is an Object in JavaScript?**
   An object in JavaScript is a collection of key-value pairs where each key is a string (or a Symbol) and the value can be any data type, including other objects, arrays, functions, primitive types, etc.

#### Syntax:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("Hello!");
  },
};
```

2. **Creating Objects**

#### Using Object Literals

```javascript
const person = {
  name: "Alice",
  age: 25,
};
```

Using the `new Object()` Syntax

```javascript
const person = new Object();
person.name = "Bob";
person.age = 28;
```

#### Using a Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Charlie", 22);
```

3. **Types of Object Keys**

- **String** (or coerced to string): All property keys in JavaScript objects are automatically converted to strings.

```javascript
const obj = {
  name: "Alice",
};
```

- **Symbol** : A unique and immutable data type used for creating object keys.

```javascript
const sym = Symbol("id");
const obj = {
  [sym]: 123,
};
```

4. **Object Properties**
   Object properties can be:

- **Data Properties** : Standard key-value pairs.

- **Accessor Properties** : Defined using getters and setters.

#### Accessor Properties Example:

```javascript
const obj = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
```

5. **Accessing Object Properties**
   There are two common ways to access properties:

- **Dot Notation**

```javascript
console.log(person.name); // Alice
```

- **Bracket Notation** (useful when the property name contains spaces or is dynamic)

```javascript
console.log(person["name"]); // Alice
```

6. **Object Methods**
   Objects can contain methods, which are functions that are part of an object.

```javascript
const person = {
  name: "Jane",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet(); // Hello, Jane
```

7. **Object Prototypes** Every JavaScript object has a prototype. The prototype is another object that it inherits properties and methods from. You can access an object's prototype with `Object.getPrototypeOf()` or via `__proto__` (deprecated).

#### Example:

```javascript
const person = { name: "Alice" };
const proto = Object.getPrototypeOf(person);
console.log(proto); // Object.prototype
```

8. `this` in Objects\*\* In the context of an object method, `this` refers to the object that the method is a property of.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // Alice
```

9. **Object Methods for Manipulating Properties**
   There are several built-in methods to work with objects:

- **`Object.keys()`** : Returns an array of the object's property names.

```javascript
console.log(Object.keys(person)); // ["name", "greet"]
```

- **`Object.values()`** : Returns an array of the object's property values.

```javascript
console.log(Object.values(person)); // ["Alice", function() {...}]
```

- **`Object.entries()`** : Returns an array of `[key, value]` pairs.

```javascript
console.log(Object.entries(person)); // [["name", "Alice"], ["greet", function() {...}]]
```

- **`Object.assign()`** : Copies all properties from one or more objects to a target object.

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }
```

- **`Object.freeze()`** : Freezes an object, making it immutable (can’t be modified).

```javascript
const person = Object.freeze({ name: "Alice" });
person.name = "Bob"; // Won’t work because the object is frozen
```

- **`Object.seal()`** : Seals an object, preventing adding/removing properties but allows modifications to existing properties.

```javascript
const person = Object.seal({ name: "Alice" });
person.age = 30; // Won’t work, new properties can't be added
person.name = "Bob"; // Works, as existing properties can be modified
```

10. \*\*
    In JavaScript, objects are key-value pairs where the keys (also called properties) are strings (or Symbols) and the values can be any data type. JavaScript objects are fundamental in the language, and understanding them is crucial for working effectively with JavaScript.

Here’s a comprehensive breakdown of everything you need to know about objects in JavaScript:

1. **What is an Object in JavaScript?**
   An object in JavaScript is a collection of key-value pairs where each key is a string (or a Symbol) and the value can be any data type, including other objects, arrays, functions, primitive types, etc.

#### Syntax:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("Hello!");
  },
};
```

2. **Creating Objects**

#### Using Object Literals

```javascript
const person = {
  name: "Alice",
  age: 25,
};
```

Using the `new Object()` Syntax

```javascript
const person = new Object();
person.name = "Bob";
person.age = 28;
```

#### Using a Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Charlie", 22);
```

3. **Types of Object Keys**

- **String** (or coerced to string): All property keys in JavaScript objects are automatically converted to strings.

```javascript
const obj = {
  name: "Alice",
};
```

- **Symbol** : A unique and immutable data type used for creating object keys.

```javascript
const sym = Symbol("id");
const obj = {
  [sym]: 123,
};
```

4. **Object Properties**
   Object properties can be:

- **Data Properties** : Standard key-value pairs.

- **Accessor Properties** : Defined using getters and setters.

#### Accessor Properties Example:

```javascript
const obj = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
```

5. **Accessing Object Properties**
   There are two common ways to access properties:

- **Dot Notation**

```javascript
console.log(person.name); // Alice
```

- **Bracket Notation** (useful when the property name contains spaces or is dynamic)

```javascript
console.log(person["name"]); // Alice
```

6. **Object Methods**
   Objects can contain methods, which are functions that are part of an object.

```javascript
const person = {
  name: "Jane",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet(); // Hello, Jane
```

7. **Object Prototypes** Every JavaScript object has a prototype. The prototype is another object that it inherits properties and methods from. You can access an object's prototype with `Object.getPrototypeOf()` or via `__proto__` (deprecated).

#### Example:

```javascript
const person = { name: "Alice" };
const proto = Object.getPrototypeOf(person);
console.log(proto); // Object.prototype
```

8. \*\*
   In JavaScript, objects are key-value pairs where the keys (also called properties) are strings (or Symbols) and the values can be any data type. JavaScript objects are fundamental in the language, and understanding them is crucial for working effectively with JavaScript.

Here’s a comprehensive breakdown of everything you need to know about objects in JavaScript:

1. **What is an Object in JavaScript?**
   An object in JavaScript is a collection of key-value pairs where each key is a string (or a Symbol) and the value can be any data type, including other objects, arrays, functions, primitive types, etc.

#### Syntax:

```javascript
const person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log("Hello!");
  },
};
```

2. **Creating Objects**

#### Using Object Literals

```javascript
const person = {
  name: "Alice",
  age: 25,
};
```

Using the `new Object()` Syntax

```javascript
const person = new Object();
person.name = "Bob";
person.age = 28;
```

#### Using a Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Charlie", 22);
```

3. **Types of Object Keys**

- **String** (or coerced to string): All property keys in JavaScript objects are automatically converted to strings.

```javascript
const obj = {
  name: "Alice",
};
```

- **Symbol** : A unique and immutable data type used for creating object keys.

```javascript
const sym = Symbol("id");
const obj = {
  [sym]: 123,
};
```

4. **Object Properties**
   Object properties can be:

- **Data Properties** : Standard key-value pairs.

- **Accessor Properties** : Defined using getters and setters.

#### Accessor Properties Example:

```javascript
const obj = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
```

5. **Accessing Object Properties**
   There are two common ways to access properties:

- **Dot Notation**

```javascript
console.log(person.name); // Alice
```

- **Bracket Notation** (useful when the property name contains spaces or is dynamic)

```javascript
console.log(person["name"]); // Alice
```

6. **Object Methods**
   Objects can contain methods, which are functions that are part of an object.

```javascript
const person = {
  name: "Jane",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet(); // Hello, Jane
```

7. **Object Prototypes** Every JavaScript object has a prototype. The prototype is another object that it inherits properties and methods from. You can access an object's prototype with `Object.getPrototypeOf()` or via `__proto__` (deprecated).

#### Example:

```javascript
const person = { name: "Alice" };
const proto = Object.getPrototypeOf(person);
console.log(proto); // Object.prototype
```

8. `this` in Objects\*\* In the context of an object method, `this` refers to the object that the method is a property of.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // Alice
```

9. **Object Methods for Manipulating Properties**
   There are several built-in methods to work with objects:

- **`Object.keys()`** : Returns an array of the object's property names.

```javascript
console.log(Object.keys(person)); // ["name", "greet"]
```

- **`Object.values()`** : Returns an array of the object's property values.

```javascript
console.log(Object.values(person)); // ["Alice", function() {...}]
```

- **`Object.entries()`** : Returns an array of `[key, value]` pairs.

```javascript
console.log(Object.entries(person)); // [["name", "Alice"], ["greet", function() {...}]]
```

- **`Object.assign()`** : Copies all properties from one or more objects to a target object.

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }
```

- **`Object.freeze()`** : Freezes an object, making it immutable (can’t be modified).

```javascript
const person = Object.freeze({ name: "Alice" });
person.name = "Bob"; // Won’t work because the object is frozen
```

- **`Object.seal()`** : Seals an object, preventing adding/removing properties but allows modifications to existing properties.

```javascript
const person = Object.seal({ name: "Alice" });
person.age = 30; // Won’t work, new properties can't be added
person.name = "Bob"; // Works, as existing properties can be modified
```

10. `hasOwnProperty()` Method\*\*
    Checks if an object has a property as its own (not inherited).

```javascript
const person = { name: "John" };
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
```

11. **Inheritance and the Prototype Chain** JavaScript objects inherit from other objects. This inheritance is handled via the prototype chain. You can define your own prototypes or use built-in prototypes like `Object.prototype`.

#### Example with prototype inheritance:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
```

12. **ES6+ Enhancements**

- **Object Destructuring** : A shorthand for extracting values from objects.

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Alice
```

- **Spread Syntax (`...`)** : Copies or merges objects.

```javascript
const person = { name: "Alice", age: 25 };
const clone = { ...person }; // Shallow copy
const updatedPerson = { ...person, age: 26 }; // Update a property
```

- **Object.assign() and Spread for Merging** :

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
```

13. **Common Use Cases of Objects**

- **Representing entities** (e.g., `person`, `book`, `car`)

- **Storing data** (e.g., `configurations`, `settings`)

- **Event Handling** (storing methods for callbacks)

- **Data storage** (such as key-value pairs in a `Map` object)

14. **Object vs. Array**
    An object is best used when you need to store properties with string or symbol keys. Arrays are best used for lists of values where order is important.

#### Example:

- **Object** : For named properties

```javascript
const book = { title: "1984", author: "George Orwell", year: 1949 };
```

- **Array** : For ordered collection

```javascript
const numbers = [1, 2, 3, 4, 5];
```

### Summary

- Objects are a core feature of JavaScript and are used for storing key-value pairs.

- Properties can be data properties or methods (functions).

- You can interact with objects using dot notation or bracket notation.

- JavaScript offers several built-in methods for working with objects (`Object.keys()`, `Object.values()`, etc.).

- Objects have prototypes, and you can manipulate inheritance through prototypes or the `class` syntax.

Let me know if you'd like more details or specific examples on any aspect of objects in JavaScript!

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. Prototype Inheritance via `class`\*\* ES6 introduced the `class` syntax, which is syntactic sugar over the constructor function and prototype-based inheritance. The prototype is still involved, but `class` makes it easier to work with.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In the `class` syntax:

- `Animal.prototype.speak` is created under the hood.

- Objects created with the `new Animal()` constructor will inherit the `speak` method.

8. **Adding/Modifying Prototype Methods**
   You can add or modify methods on an object’s prototype at any time, and all instances of that object will automatically get access to the new or modified methods.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

// Modifying the prototype method
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

alice.greet(); // Hi, I'm Alice
```

9. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. Prototype Inheritance via `class`\*\* ES6 introduced the `class` syntax, which is syntactic sugar over the constructor function and prototype-based inheritance. The prototype is still involved, but `class` makes it easier to work with.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In the `class` syntax:

- `Animal.prototype.speak` is created under the hood.

- Objects created with the `new Animal()` constructor will inherit the `speak` method.

8. **Adding/Modifying Prototype Methods**
   You can add or modify methods on an object’s prototype at any time, and all instances of that object will automatically get access to the new or modified methods.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

// Modifying the prototype method
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

alice.greet(); // Hi, I'm Alice
```

9. `instanceof` Operator\*\* The `instanceof` operator checks whether an object is an instance of a given class or has that class’s prototype in its prototype chain.

#### Example:

```javascript
const dog = new Animal("Buddy");
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true (all objects inherit from Object)
```

10. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. Prototype Inheritance via `class`\*\* ES6 introduced the `class` syntax, which is syntactic sugar over the constructor function and prototype-based inheritance. The prototype is still involved, but `class` makes it easier to work with.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In the `class` syntax:

- `Animal.prototype.speak` is created under the hood.

- Objects created with the `new Animal()` constructor will inherit the `speak` method.

8. **Adding/Modifying Prototype Methods**
   You can add or modify methods on an object’s prototype at any time, and all instances of that object will automatically get access to the new or modified methods.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

// Modifying the prototype method
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

alice.greet(); // Hi, I'm Alice
```

9. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. \*\*

### Understanding Prototypes in JavaScript

In JavaScript, **prototypes** are a powerful feature of the language that allows objects to inherit properties and methods from other objects. This inheritance mechanism is key to how JavaScript supports object-oriented programming and how it handles object methods and properties.
Here’s a detailed breakdown of prototypes and how they work:

---

1. **What is a Prototype?** Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This prototype object itself has a prototype, and so on, forming a **prototype chain** .

- **Prototype** : The object that an object inherits methods and properties from.

- **Prototype Chain** : The chain of prototypes that an object traverses when looking for a property or method.

2. **Prototype of Every Object**
   In JavaScript, when you create an object, it automatically has a prototype. This prototype is determined by how the object is created:

- **Object Literals** : If you create an object using an object literal (`{}`), it inherits from `Object.prototype`.

- **Constructor Functions** : If you create an object via a constructor function or class, it inherits from the constructor function's `prototype`.

3. **Accessing the Prototype**
   You can access the prototype of any object using:

- `Object.getPrototypeOf(object)` — returns the prototype object of the specified object.

- `__proto__` — a deprecated property that directly accesses the prototype of an object (use `Object.getPrototypeOf()` instead).

#### Example:

```javascript
const person = { name: "John" };
console.log(Object.getPrototypeOf(person)); // Object.prototype
```

4. **Constructor Function and Prototypes** When you create an object using a **constructor function** , it inherits from the constructor's `prototype`.

#### Example of Constructor Function:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In this example:

- `dog` inherits the `speak` method from `Animal.prototype`.

5. **Prototype Chain** If an object doesn't have a property that is directly defined on it, JavaScript will look up the property in its prototype and continue up the prototype chain until it either finds the property or reaches `null`.

#### Example:

```javascript
const animal = { name: "Lion" };
const lion = Object.create(animal); // lion's prototype is animal
lion.speak = function () {
  console.log("Roar!");
};
lion.speak(); // Roar!

console.log(lion.name); // Lion (Inherited from animal)
```

Here, `lion` does not have the `name` property directly, so JavaScript looks up the prototype chain and finds it on the `animal` object.6. `Object.prototype`\*\*

- Every object in JavaScript inherits from `Object.prototype`, which is the root object.

- It contains methods that are available to all objects (e.g., `toString()`, `hasOwnProperty()`, `valueOf()`).

```javascript
const person = { name: "Alice" };
console.log(person.hasOwnProperty("name")); // true
```

- **`Object.prototype` methods** are available to all objects.

7. Prototype Inheritance via `class`\*\* ES6 introduced the `class` syntax, which is syntactic sugar over the constructor function and prototype-based inheritance. The prototype is still involved, but `class` makes it easier to work with.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

In the `class` syntax:

- `Animal.prototype.speak` is created under the hood.

- Objects created with the `new Animal()` constructor will inherit the `speak` method.

8. **Adding/Modifying Prototype Methods**
   You can add or modify methods on an object’s prototype at any time, and all instances of that object will automatically get access to the new or modified methods.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

// Modifying the prototype method
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

alice.greet(); // Hi, I'm Alice
```

9. `instanceof` Operator\*\* The `instanceof` operator checks whether an object is an instance of a given class or has that class’s prototype in its prototype chain.

#### Example:

```javascript
const dog = new Animal("Buddy");
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true (all objects inherit from Object)
```

10. Prototype and `this`\*\* Inside methods defined on a prototype, the value of `this` refers to the object that the method was called on.

#### Example:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");
dog.speak(); // Buddy makes a sound.
```

Here, `this` refers to the `dog` object when the `speak` method is called.11. **Prototype Method Lookup Example**
Let’s see an example where a method is looked up through the prototype chain:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name); // Inherit from Animal constructor
}

Dog.prototype = Object.create(Animal.prototype); // Inherit methods from Animal

Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

const dog = new Dog("Buddy");
dog.speak(); // Buddy makes a sound. (Inherited from Animal)
dog.bark(); // Buddy barks. (Defined in Dog)
```

Here:

- `Dog.prototype = Object.create(Animal.prototype)` sets up inheritance, making `Dog` inherit from `Animal`.

- `dog.speak()` is inherited from `Animal`, and `dog.bark()` is a method unique to `Dog`.

12. **Prototype Chain Lookup**
    If a method is not found on an object, JavaScript will look for it on the object’s prototype. If it's not found there, it will keep checking up the prototype chain.

#### Example:

```javascript
const animal = {
  eat() {
    console.log("Eating...");
  },
};

const cat = Object.create(animal);
cat.meow = function () {
  console.log("Meow!");
};

cat.meow(); // Meow!
cat.eat(); // Eating... (Inherited from animal)
```

Here, `cat` inherits the `eat` method from `animal`.13. **Manipulating the Prototype**
You can manipulate the prototype of any function or object after its creation.

#### Example:

```javascript
function Car(model) {
  this.model = model;
}

Car.prototype.start = function () {
  console.log(`${this.model} is starting.`);
};

const myCar = new Car("Toyota");
myCar.start(); // Toyota is starting.

// Adding a new method to the prototype
Car.prototype.stop = function () {
  console.log(`${this.model} is stopping.`);
};

myCar.stop(); // Toyota is stopping.
```

14. **ES6 Enhancements and Prototypes**
    ES6 introduced several features that simplify prototype manipulation:

- **`class` syntax** for cleaner and more intuitive inheritance.

- **`super` keyword** to call methods from a parent class.

- **`Object.setPrototypeOf()`** to directly set an object's prototype.
  Example with `super`:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Call the parent class's constructor
  }

  speak() {
    super.speak(); // Call the parent class's method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak();
// Buddy makes a sound.
// Buddy barks.
```

### Summary

- **Prototypes** in JavaScript enable inheritance by allowing objects to share properties and methods.

- Every object has a prototype, and you can access it via `Object.getPrototypeOf()` or `__proto__`.

- **Constructor functions** and **classes** use prototypes for inheritance, where methods are stored.

- Objects inherit properties and methods through the **prototype chain** .

- **`super`** and \***\*`super`** and `class`\*\* provide a cleaner syntax for working with prototypes in ES6.

Let me know if you want deeper explanations or examples on any of these concepts!
