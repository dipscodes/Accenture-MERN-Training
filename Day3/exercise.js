class Vehicle {
  constructor(speed, color) {
    this.speed = speed;
    this.color = color;
  }

  setSpeed(speed) {
    this.speed = speed;
    console.log(`Speed set to ${this.speed} km/h`);
  }

  drive() {
    console.log(`Driving at ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  constructor(speed, color, mileage) {
    super(speed, color);
    this.mileage = mileage;
  }

  setSpeed(speed) {
    super.setSpeed(speed);
    console.log(`Car speed set to ${this.speed} km/h`);
  }

  drive() {
    super.drive();
    console.log(
      `Car is driving at ${this.speed} km/h with mileage ${this.mileage} km/l`
    );
  }
}

const myCar = new Car(100, "Red", 15);
myCar.setSpeed(120);
console.log("\n");
myCar.drive();
