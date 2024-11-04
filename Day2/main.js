// Create a function
// Function statement - Function without parameters
//                    - Function with parameters - Sum, difference
// Function expressions - Sum, difference
// Arrow functions - Single line of code
//                 - Multiple lines of code - Sum, diffrenece

function welcomeTeam() {
  console.log("Function without parameters :", "Hello, Welcome Team!");
}
welcomeTeam();

function calculateSummation(a, b) {
  return a + b;
}
console.log("Function with parameters - Sum :", calculateSummation(10, 5));
function calculateDifference(a, b) {
  return a - b;
}
console.log("Function with parameters - Difference :", calculateDifference(10, 5));


const sum = function (a, b) {
  return a + b;
};
console.log("Function expressions - Sum : ", sum(7, 3));
const difference = function (a, b) {
  return a - b;
};
console.log("Function expressions - Difference : ", difference(7, 3));


const singleLineSum = (a, b) => a + b;
console.log("Arrow functions - Single line of code Sum : ", singleLineSum(8, 2));
const singleLineDifference = (a, b) => a - b;
console.log("Arrow functions - Single line of code Difference : ", singleLineDifference(8, 2));


const multiLineSum = (a, b) => {
  const result = a + b;
  return result;
};
console.log("Arrow functions - Multiple lines of code (Sum)", multiLineSum(6, 4));
const multiLineDifference = (a, b) => {
  const result = a - b;
  return result;
};
console.log("Arrow functions - Multiple lines of code (Difference)", multiLineDifference(6, 4));
