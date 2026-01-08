console.log("hello ji");

// class Bank{
//     balance = 2020

//     credit(){}
//     debit(){}
// }

// class Car {
//   //blueprint
//   model = 2020; //data member
//   topspeed = 200;

//   private;
//   chsssyNo = 12345678;

//   drive() {
//     //data method
//     return "you can drive";
//   }

//   tyre(a, b) {
//     console.log("mai do tyre wala");
//   }

//   tyre(a, b, c, d) {
//     console.log("mai teen tyre wala");
//   }

//   //   getter setter
// }

// class ferrari inherit Car{

//     chnage
//     topspeed=350

//     drive(){
//         return " you can fly"
//     }

// }

// let Maruti = new Car(); //copy1

// Maruti.tyre(1, 2);

// let Ferrari = new Car();//copy2

// console.log(Maruti.model);

// console.log(model);

// let arr = [1, 2, 3, 4];
// console.log(arr);

// const profile = {
//   firstName: "Pankaj",
//   lastName: "Oberoi",
//   age: 25,
//   jobStatus: true,
//   address: ["hinjewade", "Pune"],
//   salary: 95000,
// };

// Dot vs bracket(expression)

// console.log(profile.firstName);

// console.log(profile["address"]);

// let nameKey = "Name";

// console.log(profile["first" + nameKey]);

// console.log(profile["last" + nameKey]);

// let manager = prompt("Enter the value you want to access from my profile");

// console.log(profile[manager]);

// console.log(profile["address"][1]);

// json = [{},{},{}]

// profile.gmail = "abc@gmail.com";

// console.log(profile);

// profile["insta"] = "pankajpberoi112";

// console.log(profile);

// profile.firstName = "Khushi";

// profile.jobStatus = false;

// console.log(profile);

// const profile = {
//   firstName: "Pankaj",
//   lastName: "Oberoi",
//   age: 25,
//   jobStatus: true,
//   address: ["hinjewade", "Pune"],
//   salary: 95000,
// };

// let key = prompt("Enter the key you want to access");

// if (profile[key] > 90000) {
//   profile.jobStatus = false;
//   console.log("1 month notice period");
//   console.log(profile);
// }

// let student = {
//   Name: "Chinki",
//   rollno: 101,
//   marks: {
//     math: 10,
//     science: 20,
//     english: 30,
//   },
// };

// let total = student.marks.math + student.marks.science + student.marks.english;
// let percentage = (total / 300) * 100;

// if (percentage > 40) {
//   console.log(
//     `Student ${student.Name} with roll no ${student.rollno} have ${percentage}% number`
//   );
// } else {
//   console.log(`${student.Name} is failed`);
// }

// let haldiram = [
//   {
//     Sweet: "Jalebi",
//     price: 50,
//     stock: "1KG",
//   },
//   {
//     Sweet: "Gulab jMaun",
//     price: 510,
//     stock: "2KG",
//   },
//   {
//     Sweet: "Halwa",
//     price: 500,
//     stock: "2KG",
//   },
// ];

// let output = haldiram.map((i) => {
//   return i;
// });

// console.log(output);

// let product = {
//   Sweet: "Jalebi",
//   price: 50,
//   stock: "1KG",
// };

// console.log(product);

// for (let i in product) {
//   console.log(product[i]);
// }

// let product = {
//   Sweet: "Jalebi",
//   price: 50,
//   stock: "1KG",
// };

// console.log(product);

// let keys = Object.keys(product);
// console.log(keys);

// let values = Object.values(product);
// console.log(values);

// for (let [key, value] of Object.entries(product)) {
//   console.log(key, value);
// }

// console.log(Object.entries(product));

// const orders = [
//   { orderId: 1, customer: "Amit", items: ["Burger", "Pizza"], total: 450, delivered: true },
//   { orderId: 2, customer: "Neha", items: ["Pasta"], total: 250, delivered: false },
//   { orderId: 3, customer: "Ravi", items: ["Burger", "Fries"], total: 300, delivered: true },
//   { orderId: 4, customer: "Pooja", items: ["Pizza"], total: 350, delivered: true }
// ];

// Q => return => totalOrders => 4

// Q => return => deliveredOrders => 3

// Q => return => PendingOrder => 1

// Q => return => TotalRevenue => 1150 (delivered => true)

// Q => TopCustomer => Amit
