// console.log(alldetails);
// product = {
//   ...product,
//   price: 60000,
// };

// console.log(product);

// function updateprice(prod, new_price) {
//   let new_prod = { ...prod, price: new_price };
//   return new_prod;
// }

// let updated_product = updateprice(product, 70000);

// console.log("Program started...");
// setTimeout(() => {
//   console.log("Hello!!");
// }, 5000);
// console.log("After timeout");
// setInterval(() => {
//   let today = new Date();
//   console.log(today.toLocaleTimeString());
// }, 2000);

//console.log("sending req")

/*setTimeout(()=>{
    console.log("recieved Response")
},3000)
 
console.log("Process response")
console.log("display response")*/

let p = new Promise(function (resolve, reject) {
  console.log("sending req");
  setTimeout(() => {
    console.log("recieved Response");
    resolve("response recieved successfully!!");
    //reject("server Error!!")
  }, 3000);
});

p.then((msg) => {
  console.log(msg);
  console.log("transform response");
  return "transformed response ";
})
  .then((msg) => {
    console.log("display" + msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("program completed...");
  });

//https://jsonplaceholder.typicode.com/posts

let p1 = fetch("https://jsonplaceholder.typicode.com/posts");

p1.then((res) => res.json())
  .then((jsondata) => console.log(jsondata))
  .catch((err) => {
    console.log("Catch ..");
    console.log(err);
  })
  .finally(() => {
    console.log("request is completed");
  });

/* jshint strict:true, +W033, varstmt:true */
let a = "hi";
let b = 10;
console.log(b);
var x = 10;
console.log(x);
function sum(n1, n2) {
  console.log(n1 + n2);
}

// jshint_config.jshintrc

// {
//     "undef":true,
//     "unused":true,
//      "strict":false
// }

// jshint jshintdemo.js --config cofig.json

// config.json

// {
//     "undef":true,
//     "unused":true,
//      "strict":false
// }
