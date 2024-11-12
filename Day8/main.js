let products1 = ["smart tv", "monitor", "laptop", "phone", "desktop"];

let newproducts = products1.filter((item) => item !== "smart tv");
console.log(newproducts);
console.log(products1);

let updated_list = products1.filter((item) => {
  if (item === "monitor") {
    return false;
  } else {
    return true;
  }
});

console.log(updated_list);

let new_updatedlist = products1.map((item) => {
  if (item === "monitor") {
    return "desktop monitor";
  }

  return item;
});

console.log(new_updatedlist);

let users = [
  "sara",
  "kushal",
  "samantha",
  "premendra",
  "sagaar",
  "amar",
  "virat",
  "jane",
  "samuel",
  "maan",
];

users = users.filter((user) => !user.includes("sa"));

users = users
  .filter((user) => !user.includes("sa"))
  .map((user) => (user === "virat" ? "virat kohli" : user))
  .map((user) => {
    const title = user.endsWith("a") ? "Ms." : "Mr.";
    return `${title} ${user}`;
  });

users.forEach((user) => console.log(user));

let firstname = "sachin";
let lastname = "tendulkar";

let username = firstname || lastname || "Guest"; //will check first true value
console.log("welcome " + username);

let fullname = firstname && lastname && firstname + " " + lastname; //will check first false value
console.log(fullname);

let product = {
  name: "mobile",
  brand: "apple",
  price: 50000,
  rating: 4.5,
  supplier: {
    name: "xyz pvt ltd",
    location: "mumbai",
  },
  comments: ["good", "great", "super"],
  title: function () {
    return this.name + "|" + this.brand + "|" + this.price;
  },
};

let prop = "rating";
console.log(product.name);
console.log(product[prop]);
console.log(product.supplier.location);
console.log(product.supplier["name"]);
console.log(product.title());

let user1 = {
  firstname: "sachin",
  lastname: "tendulkar",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(user1.fullname());

let user2 = {
  fname: "virat",
  lastname: "kholi",
  fullname: () => {
    return this.firstname + " " + this.lastname; //undefined
  },
};

let product1;

console.log(product ? product.name : "");

product = {
  name: "mobile",
  brand: "apple",
  price: 50000,
  rating: 4.5,
  supplier: {
    name: "xyz",
    location: "mumbai",
  },
};

//console.log(product.supplier.location)

/*console.log(
    product?product.supplier?product.supplier.location:undefined:undefined
)*/
console.log(product && product.supplier && product.supplier.location);
//?.

console.log(product?.supplier?.location);

const products = ["mobile", "monitor", "laptop", "smart tv"];

/*let p1=products[0]
let p2=products[1]*/

let [p1, p2] = products1;
console.log(p1);
console.log(p2);

let [p_1, , p_3] = products1;
console.log(p_1);
console.log(p_3);

let [prod1, ...prods] = products1;
console.log(prod1);
console.log(prods);

function arithemetic(n1, n2) {
  return [n1 + n2, n1 - n2, n1 * n2, n1 / n2];
}

//console.log(arithemetic(10,20))

let [sum, sub] = arithemetic(10, 20); //[30,-10,200,0.5]
console.log(sum);
console.log(sub);

let [, sub_res, , div_res] = arithemetic(10, 20);
console.log(sub_res);
console.log(div_res);

let elec_products = ["mobile", "laptop", "tv"]; //2000
let furniture = ["chair", "table"];

//elec_products.push("monitor") //2000

//insert
elec_products = [...elec_products, "monitor"]; //3000
console.log(elec_products);

//delete
let newproducts1 = products1.filter((item) => item !== "tv");
elec_products = [...newproducts]; //8000

let allprods = [...elec_products, ...furniture];
console.log(allprods);

/*let copy_elec=elec_products//2000 //copy_elec-->2000
elec_products.pop()
console.log(copy_elec)*/

let actual_copy_elec = [...elec_products]; //4000
elec_products.pop();
console.log(actual_copy_elec);
console.log(elec_products);

let product2 = {
  name: "mobile",
  brand: "apple",
  price: 50000,
  rating: 4.5,
}; //6000
//copy
let copy_product = { ...product }; //7000
product.price = 60000;
console.log(copy_product);
//add new prop
product = { ...product, category: "Electronics" };

console.log(product);

let supplier = {
  suppliername: "xyz",
  location: "mumbai",
};

let alldetails = {
  ...product,
  ...supplier,
};

console.log(alldetails);
