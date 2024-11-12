function displayFullName(...rest) {
  let [first, middle, last] = rest;
  if (!last) {
    if (!middle) {
      return "Give at least First Name and Last Name";
    }
    last = middle;
    middle = "-";
  }
  return `${first} ${middle} ${last}`;
}

function displayFullNameAlt(firstName, lastName, middleName = "-") {
  return `${firstName} ${middleName} ${lastName}`;
}

function multiplyNumbers(...numbers) {
  product = 1;
  numbers.forEach((item) => (product = product * item));
  return product;
}

console.log(displayFullName("Vikram"));
console.log(displayFullName("Vikram", "Aditya", "Bhardwaj", "HMM"));
console.log(displayFullNameAlt("Vikram", "Aditya"));
console.log(displayFullNameAlt("Vikram", "Aditya", "Bhardwaj", "HMM"));

console.log(multiplyNumbers(1, 5, 10, 2));
console.log(multiplyNumbers(8));
