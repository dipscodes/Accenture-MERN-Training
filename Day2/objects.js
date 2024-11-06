const lamborghini = {
  make: "Lamborghini",
  model: "Huracan",
  year: 2022,
  isRunning: false,

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} started.`);
  },

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} stopped.`);
  },

  owner: {
    name: "Vikramaditya",
    address: "Barabazar, Kolkata",
  },
};

console.log(lamborghini.make);
lamborghini.start();
console.log(lamborghini.owner.name);
lamborghini.stop();

var lamborghiniAventador = new Object();

lamborghiniAventador.make = "Lamborghini";
lamborghiniAventador.model = "Aventador";
lamborghiniAventador.year = 2022;
lamborghiniAventador.color = "Red";
lamborghiniAventador.isRunning = false;

lamborghiniAventador.start = function () {
  this.isRunning = true;
  console.log(`${this.make} ${this.model} started.`);
};

lamborghiniAventador.stop = function () {
  this.isRunning = false;
  console.log(`${this.make} ${this.model} stopped.`);
};

lamborghiniAventador.owner = {
  name: "Vikramaditya",
  address: "Barabazar, Kolkata",
};

console.log(lamborghiniAventador.make);
console.log(lamborghiniAventador.model);
lamborghiniAventador.start();
console.log(lamborghiniAventador.owner.name);
lamborghiniAventador.stop();

function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;

  this.introduce = function () {
    console.log(
      `Hello, my name is ${this.name}. I am ${this.age} years old and live at ${this.address}.`
    );
  };
}

var person1 = new Person("Vikram", 29, "Barabazar, Kolkata");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

person1.introduce();

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getCarInfo = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

Car.prototype.startEngine = function () {
  console.log("Engine started!");
};

const car1 = new Car("Lamborghini", "Aventador", 2020);

console.log(car1.getCarInfo());
car1.startEngine();
