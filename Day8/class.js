class Human {
  constructor(fname, lname, a) {
    this.first_name = fname;
    this.lastname = lname;
    this.age = a;
  }

  fullname = function () {
    return this.first_name + " " + this.lastname;
  };
}

let h1 = new Human("sachin", "Tendulkar", 50);
console.log(h1.fullname());
let h2 = new Human("virat", "kholi", 40);
console.log(h2.fullname());

class Employee extends Human {
  constructor(fname, lname, a, id, sal, exp) {
    super(fname, lname, a);
    this.eid = id;
    this.salary = sal;
    this.experience = exp;
  }

  employeeDetails = () => {
    return `I am ${this.fullname()} having ${this.experience}
        years of exp with salry of ${this.salary} rs`;
  };
}

class Customer extends Human {
  constructor(fname, lname, a, customerId, purchaseHistory = []) {
    super(fname, lname, a);
    this.customerId = customerId;
    this.purchaseHistory = purchaseHistory;
  }

  addPurchase(item) {
    this.purchaseHistory.push(item);
  }

  customerDetails = () => {
    return `Customer ${this.fullname()}, ID: ${
      this.customerId
    }, has purchased: ${this.purchaseHistory.join(", ")}`;
  };
}

let c1 = new Customer("Rohit", "Sharma", 38, "C101", ["Laptop", "Smartphone"]);
console.log(c1.customerDetails());

c1.addPurchase("Tablet");
console.log(c1.customerDetails());
