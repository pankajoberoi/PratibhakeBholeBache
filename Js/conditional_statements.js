console.log("Hello");

let age = 12;

// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("You can not vote");
// }

// else{

// }

// ================================

// Enter to office

// let Do_You_have_ID = true;
// let attance=5;

// if (Do_You_have_ID == true) {
//   console.log("You can enter to hell");
//   attance+=1;

// } else {
//   console.log("ghar jao aish karo");
// }

// console.log("End of code");

// let answer =
//   Do_You_have_ID == true ? "You can enter to hell" : "ghar jao aish karo";

// console.log(answer);

// On HOLD
// let pass = prompt("Enter password");
// let Failed_attempt = 0;

// if (pass === "1234" && Failed_attempt < 3) {
//   console.log("Login success");
// } else {
//   console.log("Login failed try again");
//   Failed_attempt++;

//   let pass = prompt("Enter password");
//   if (pass === "1234" && Failed_attempt < 3) {
//     console.log("Login success");
//   } else {
//     console.log("Login failed try again");
//     Failed_attempt++;

//     let pass = prompt("Last chance Enter password");

//     if (pass === "1234" && Failed_attempt < 3) {
//       console.log("Login success");
//     } else {
//       console.log("Login after 24 hours");
//     }
//   }
// }

// =================================

// let tenth = 65;
// let twelth = 75;
// let college = 8;
// let ex = "PASS";

// if (tenth > 80) {
//   if (twelth > 70) {
//     if (college > 7) {
//       if (ex == "PASS") {
//         console.log("Placement DOne");
//       } else {
//         console.log("Better luck next time");
//       }
//     }
//   }
// } else {
//   console.log("10th mai no. kam hai betta");
// }
// ============================================================================
// Find greatest of three

// let num1 = 5;
// let num2 = 10;
// let num3 = 71;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is greatest");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("number 2 is greatest");
// } else {
//   console.log("number 3 is greatest");
// }

// ============================================================
// Electricity bill

// let Unit_Used = 250;

// if (Unit_Used > 1 && Unit_Used <= 100) {
//   let bill = Unit_Used * 1;
//   console.log(bill);
// } else if (Unit_Used > 100 && Unit_Used <= 200) {
//   let bill = (Unit_Used - 100) * 2 + 100;
//   console.log(bill);
// } else if (Unit_Used > 200 && Unit_Used <= 300) {
//   let bill = (Unit_Used - 200) * 3 + 300;
//   console.log(bill);
// } else {
//   console.log(Unit_Used * 5);
// }

// ========================================
// Bus Fare

// let Time_to_Book_Bus = prompt("Enter time of Booking");

// if (
//   Time_to_Book_Bus == "4PM" ||
//   Time_to_Book_Bus == "5PM" ||
//   Time_to_Book_Bus == "5AM" ||
//   Time_to_Book_Bus == "6AM"
// ) {
//   let Fare = 100;

//   let distance = prompt("Enter distnace u want tot cover");
//   console.log("Distance covered " + distance);

//   if (distance <= 5) {
//     Fare += distance * 10;
//   } else {
//     Fare += distance * 8;
//   }

//   let isNight = prompt("Are you travelling in night : Y/N");

//   if (isNight == "Y") {
//     Fare = Fare + Fare * 0.2;
//     console.log("Total Fare " + Fare);
//   } else {
//     console.log("Total Fare " + Fare);
//   }
// } else {
//   let Fare = 50;

//   let distance = prompt("Enter distnace u want tot cover");
//   console.log("Distance covered " + distance);

//   if (distance <= 5) {
//     Fare += distance * 10;
//   } else {
//     Fare += distance * 8;
//   }

//   let isNight = prompt("Are you travelling in night : Y/N");

//   if (isNight == "Y") {
//     Fare = Fare + Fare * 0.2;
//     console.log("Total Fare " + Fare);
//   } else {
//     console.log("Total Fare " + Fare);
//   }
// }

// ==========================================================================

// Switch

let Day_No = 8;

switch (Day_No) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thurday");
    break;
  case 5:
    console.log("Friday");
    break;

  case 0:
  case 6:
    console.log("Weekend");
    break;

  default:
    console.log("Andha hai kya");
}
