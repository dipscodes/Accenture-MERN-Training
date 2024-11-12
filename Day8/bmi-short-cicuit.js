const calculateBMI = (weight, height) => (weight ?? 1) / (height || 1) ** 2;

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(70));
console.log(calculateBMI(0, 0));
