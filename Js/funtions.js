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
//   let flag = true;
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       flag = false;
//     }
//   }

//   return flag;
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

function Count_Digits(num) {
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

function armstrong(num, power) {
  let sum = 0;
  while (num != 0) {
    let rem = num % 10;
    sum = sum + rem ** power;
    console.log(sum);
    num = Math.floor(num / 10);
  }
  return sum;
}

let num = 153;

let power = Count_Digits(num);

let temp = armstrong(num, power);

if (temp == num) {
  console.log("Its armstrong");
} else {
  console.log("Chal bhaag yahan see");
}
