function printMessage() {
  console.log("This message is printed after 2 seconds.");
}

console.log("Start");
setTimeout(printMessage, 2000);
console.log("End");

function greetPerson(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetPerson("Vikram", sayGoodbye);
