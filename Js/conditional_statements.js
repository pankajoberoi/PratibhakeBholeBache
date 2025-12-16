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
let pass = prompt("Enter password");
let Failed_attempt = 0;

if (pass === "1234" && Failed_attempt < 3) {
  console.log("Login success");
} else {
  console.log("Login failed try again");
  Failed_attempt++;

  let pass = prompt("Enter password");
  if (pass === "1234" && Failed_attempt < 3) {
    console.log("Login success");
  } else {
    console.log("Login failed try again");
    Failed_attempt++;

    let pass = prompt("Last chance Enter password");

    if (pass === "1234" && Failed_attempt < 3) {
      console.log("Login success");
    } else {
      console.log("Login after 24 hours");
    }
  }
}

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
