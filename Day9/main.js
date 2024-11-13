console.log(alldetails);
product = {
  ...product,
  price: 60000,
};

console.log(product);

function updateprice(prod, new_price) {
  let new_prod = { ...prod, price: new_price };
  return new_prod;
}

let updated_product = updateprice(product, 70000);

console.log("Program started...");
setTimeout(() => {
  console.log("Hello!!");
}, 5000);
console.log("After timeout");
setInterval(() => {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000);
