console.log("Program started...");
setTimeout(() => {
  console.log("Hello!!");
}, 5000);
console.log("After timeout");
setInterval(() => {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000);
