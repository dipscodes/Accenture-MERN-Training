function genericSum(x) {
  return (y) => x + y;
}

var addFivetoNumber = genericSum(5);
console.log(addFivetoNumber(3));
console.log(addFivetoNumber(10));

function greetingsGenerator(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

var sayHelloTo = greetingsGenerator("Hello");
var sayHiTo = greetingsGenerator("Hi");

sayHelloTo("Vikram");
sayHiTo("Aditya");

function genericMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

var double = genericMultiplier(2);
var triple = genericMultiplier(3);

console.log(double(5));
console.log(triple(5));
