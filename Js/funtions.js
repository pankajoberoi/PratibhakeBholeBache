console.log("Hello ji");

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

let age = calAge(2000);
console.log(age);

function calAge(birthYear) {
  return 2025 - birthYear;
}

// ========================================

// let message = function () {
//   console.log("helo ji i am anynonmus");
// };

// message();

// console.log(message);

// =======================================

let age2 = Myage(2000);
console.log(age2);

let Myage = function (birthYear) {
  return 2025 - birthYear;
};
