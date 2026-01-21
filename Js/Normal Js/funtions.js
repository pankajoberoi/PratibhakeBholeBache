// console.log("Hello ji");

// {
//   console.log("namaskar mitron");
// }

// function greet() {
//   console.log("Uthjaa nalayk aulaad");
// }

// greet(); //call/invoke/run
// greet();
// greet();
// greet();

//parameter
// function Juicer(apples, oranges) {
//   console.log(apples, oranges);

//   var juice = `Juice with ${apples} apples and ${oranges} oranges `;

//   return juice;
// }

// let glass = Juicer(9, 4); //agruments
// console.log(Juicer(2, 2));
// console.log(glass);

// Juicer(2, 0);

// function expression vs function declaration

// let age = calAge(2000);
// console.log(age);

// function calAge(birthYear) {
//   return 2025 - birthYear;
// }

// ========================================

// let message = function () {
//   console.log("helo ji i am anynonmus");
// };

// message();

// console.log(message);

// =======================================

// let age2 = Myage(2000);
// console.log(age2);

// let Myage = function (birthYear) {
//   return 2025 - birthYear;
// };

// function bonus(salary) {
//   //Value
//   salary += 1000;
// }

// let salary = 10000;

// bonus(salary); //paasedby value

// console.log(salary);

//global
// {
//   // function greet(){}

//   greet();

//   function greet() {
//     console.log("Good Morning pineaaple");
//   }
// }

// {
//     var Name;

//     console.log(Name);

//     var Name = "Pankaj";

// }

// {
//   console.log(age);
//   let age = 20;
// }

// {
//   // var greet;

//   var greet = function () {
//     console.log("hello mitron!!!!");
//   };

//   greet();
// }
//Temporal dead zone

// 1 to 50

// function ToCheckPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// let answer = ToCheckPrime(6);

// for (let i = 1; i <= 50; i++) {
//   if (ToCheckPrime(i)) {
//     console.log(i);
//   }
// }

// armstrong

// truthy and falsy

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(NaN));

// Armstrong number

// function Count_Digits(num) {
//   let count = 0;
//   while (num != 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }
//   return count;
// }

// function armstrong(num, power) {
//   let sum = 0;
//   while (num != 0) {
//     let rem = num % 10;
//     sum = sum + rem ** power;
//     console.log(sum);
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// let num = 153;

// let power = Count_Digits(num);

// let temp = armstrong(num, power);

// if (temp == num) {
//   console.log("Its armstrong");
// } else {
//   console.log("Chal bhaag yahan see");
// }

// Arrow function is a shorter form to write a function

// let Bonused_salary = function (salary) {
//   return salary + 2000;
// };

// console.log(Bonused_salary(10000));

// let Bonused_salary = (salary) => salary + 2000;

// console.log(Bonused_salary(20000));

// 2 option

// const RetirementAge = (birthyear) => {
//   const age = 2025 - birthyear;
//   const retire = 50 - age;

//   return retire;
// };

// console.log(RetirementAge(2000));

// let birthYear = 2000;
// let age = (birthYear) => 2025 - birthYear;

// console.log(`I am Pankaj and my age ${age(birthYear)}`);

// let Name = "Pankaj";
// let salary = 100000;

// let info = (Name, salary) => {
//   return `My name is ${Name} and my Salary is ${salary}`;
//   console.log("hello ji");
// };

// console.log(info(Name, salary));

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function Juicer(apples, oranges) {
//   let applePieces = cutPieces(apples);
//   let orangePieces = cutPieces(oranges);

//   var juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces `;

//   return juice;
// }

// let glass = Juicer(9, 4); //agruments

// console.log(glass);

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// //Higher order function
// function calculator(num1, num2, callback) {
//   return callback(num1, num2);
// }

// let ans = calculator(10, 5, add);

// console.log(ans);

// function paymentSuccess(msg) {
//   console.log(msg);
// }

// function paymentFailure(msg) {
//   console.log(msg);
// }

// function PaytmKaro(amount, onSuccess, onfailure) {
//   if (amount > 0) {
//     onSuccess("Payment of Rs " + amount + " is successfull");
//   } else {
//     onfailure("Payment failed");
//   }
// }

// PaytmKaro(500, paymentSuccess, paymentFailure);

// let greet = function () {
//   return "Welcome";
// };

// let naam = "Pankaj";
// let birthYear = 2000;

// let greet2 = (naam, birthYear) => {
//   let age = 2025 - birthYear;
//   return `My name is ${naam} and my age is ${age}`;
// };

// console.log(greet2(naam, birthYear));

// function bookCab(distance, callback) {
//   console.log("Cab arrived total distance you will cover is !! " + distance);
//   let totalFare = distance * 10;

//   callback(totalFare);
// }

// bookCab(25, (fare) => {
//   console.log("Total bill is " + fare);
// });

// Scope Chaining /global / block or functional scope

// let canteen = "Coffee cafe";

// function faculty() {
//   let attendance = true;

//   function student() {
//     let classesBunk = true;
//     console.log("can i access attendance : " + attendance);
//   }

//   student();
//   console.log(classesBunk);
// }

// faculty();

//closures
function createBankAccount() {
  let balance = 100;

  return function (amount) {
    balance = balance + amount;
    return `Current balance: Rs ${balance}`;
  };
}

let myAccount = createBankAccount();
console.log(myAccount);
console.log(myAccount(1000));
console.log(myAccount(1000));
