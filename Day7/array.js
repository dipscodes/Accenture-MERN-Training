const products = ["mobile", "monitor", "laptop", "smart tv"];

console.log(products.includes("mobile"));
console.log(products.indexOf("Laptop"));

let product = products.find((item) => item.startsWith("m")); //finc first matched item
/*
mobile=(mobile)=>mobile.startsWith("l")-->false
monitor=(monitor)=>monitor.startsWith("l")-->false
laptop=(laptop)=>laptop.startswith("l")-->true-->laptop
*/
console.log(product);

let filtereditems = products.filter((item) => item.startsWith("L")); //find all matched items
console.log(filtereditems);

let transformeditems = products.map((item) => "*" + item + "*"); //find all matched items
console.log(transformeditems);

let modifiedProducts = products.map((item) => {
  return item.substring(0, 3).toUpperCase() + item.substring(3);
});

console.log(modifiedProducts);
