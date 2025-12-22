console.log("Hello ji");

// for (let i = 1; i <= 5; i++) {
//   console.log("Pankaj");
// }

// for (let pankaj = 1; pankaj <= 5; pankaj++) {
//   console.log("Student " + pankaj);
// }

// Sum of 1st 10 elements

// let sum = 0;

// for (let element = 1; element <= 10; element++) {
//   sum = sum + element;
// }

// Print table

// let num = prompt("Konsa table print krun");

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + num * i);
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
// }

// let length = prompt("Btao kitni series chahiye");

// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);
// for (let i = 1; i <= length; i++) {
//   c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// break continue

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//     break;
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   } else {
//     console.log("copy checked for : ", i);
//   }
// }

// reverse a number

// let num = 123;
// let reverse = 0;

// while (num != 0) {
//   let rem = num % 10;
//   reverse = reverse * 10 + rem;
//   num = Math.floor(num / 10);
// }

// console.log(reverse);

// let i = 1;

// while (i <= 5) {
//   console.log("Pankaj");
//   i++;
// }

// System -> transactions -> current balance updated -> 1. 2. 3. 4. break while (infinite)

// let attempt = 0;

// while (attempt != 3) {
//   let pass = prompt("Enter password");
//   if (pass != "1234") {
//     attempt++;
//     alert(attempt + " wrong attempt");
//   } else {
//     //system
//     alert("login success");
//     break;
//   }
// }

// let current_balance = 1000;

// while (true) {
//   let op = prompt("Enter the operation you want to perform");
//   if (op == "exit") {
//     break;
//   }
//   switch (op) {
//     case "credit":
//       let Cr_amt = Number(prompt("Enter amount"));
//       current_balance += Cr_amt;
//       alert(Cr_amt + " is creadited");
//       break;

//     case "debit":
//       let Db_amt = Number(prompt("Enter amount"));
//       if (current_balance >= Db_amt) {
//         current_balance -= Db_amt;
//         alert(Db_amt + " is debited");
//       } else {
//         alert("Abbe chal be gareeb");
//       }
//       break;

//     case "balance":
//       alert("Your balance is : " + current_balance);
//       break;
//   }
// }

// process.stdout.write("Hello ");
// process.stdout.write("World ");
// process.stdout.write("!");

// let row = 5;

// for (let i = 1; i <= row; i++) {
//   let spaces = "";
//   for (let k = 1; k <= row - i; k++) {
//     spaces += " ";
//   }

//   let output = "";
//   for (let j = 1; j <= i; j++) {
//     output += j;
//   }
//   console.log(spaces + output);
// }

// let study = prompt("Ky apdna chahte hoo");

// while (study == "yes") {
//   console.log("chalo theek hai padte hai fir");
//   break;
// }

// do {
//   console.log("chalo theek hai padte hai fir");
//   break;
// } while (study == "yes");

let kamai = 0;
let customer;
console.log("subah ho gyi mammu dukan khul gyi");
do {
  customer = prompt("Kya customer ayya");
  if (customer == "y") {
    let bill = Number(prompt("kitna bill bna"));
    kamai += bill;
  } else {
    kamai += 50;
  }
} while (customer == "y");

console.log("din ki kamai " + kamai);
