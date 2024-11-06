console.log(varVariable);
var varVariable = "I am a var variable";

welcomeTeam();
function welcomeTeam() {
  console.log("Welcome Team");
}

helloTeam();

var helloTeam = function () {
  console.log("Hi there!Team");
};

hiTeam();
var hiTeam = function () {
  console.log("Hi! Team");
};

arrowHelloTeam();
var arrowHelloTeam = () => {
  console.log("Hello from arrow function!");
};

helloTeam();
hiTeam();
arrowHelloTeam();

console.log(varVariable);
