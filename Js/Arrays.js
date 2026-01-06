console.log("Good Morning mitron!!!");

// let StudentList = ["Pankaj", "Shruti", "Pranav", "sakshi"];

// console.log(StudentList[0]);

// let studentInfo = ["vishal", 22, true, "OM"];

// console.log(studentInfo);

// studentInfo[1] = 21;

// console.log(studentInfo);

// const arr = ["Pankaj", "Rohit", "Virat"];

// arr[1] = "Rahul";

// console.log(arr);

// let arr = [21, 25, 29, 28];

// arr = [1, 5, 2, 9];

// console.log(arr);

// const games = ["Ludo", "Chess"];

// games = ["Cricket", "Football"];

// console.log(games);

//Key = 10 => mil gya return =>index
// return "element not found"

// let key = 19;
// const arr = [12, 11, 2, 8, 3, 10, 4];
// let flag = false;

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] == key) {
//     console.log("Element found at index " + i);
//     flag = true;
//   }
// }

// if (flag == false) {
//   console.log("element not found");
// }

// let Names = ["Pankaj", "Aakash", "Yash", "Virat"];

// for (let i = 0; i < Names.length; i++) {
//   console.log(Names[i].toUpperCase());
// }

// let attendance = ["P", "A", "P", "P", "A"];
// let Present = 0;

// for (let i = 0; i < attendance.length; i++) {
//   if (attendance[i] == "P") {
//     Present++;
//   }
// }

// let perecentage = (Present / attendance.length) * 100;

// console.log("Your attendance " + perecentage);

// let Elements = [12, 50, 30, 31, 22, 90];
// // max element
// // min element
// let max = Elements[0];
// for (let i = 0; i < Elements.length; i++) {
//   if (max < Elements[i]) {
//     max = Elements[i];
//   }
// }

// console.log("Max element " + max);

// let min = Elements[0];
// for (let i = 0; i < Elements.length; i++) {
//   if (min > Elements[i]) {
//     min = Elements[i];
//   }
// }

// console.log("Min element " + min);

// let Duplicates = [2, 4, 5, 2, 7, 4];

// for (let i = 0; i < Duplicates.length; i++) {
//   for (let j = i + 1; j < Duplicates.length; j++) {
//     if (Duplicates[i] == Duplicates[j]) {
//       console.log(Duplicates[i] + " is Duplicate");
//     }
//   }
// }

// let Friends = ["Yash", "Anu", "Pankaj"];

// console.log(Friends.push("Vishal"));

// console.log(Friends);

// console.log(Friends.unshift("Virat"));

// console.log(Friends);

// console.log(Friends.pop());

// console.log(Friends);

// console.log(Friends.shift());

// console.log(Friends);

// console.log(Friends.indexOf("Anuu"));

// console.log(Friends.includes("Pankajj"));

// let items = new Array("Mobile", "Headphones", "Cover");

// console.log(items);

// let stock = [10, 0, 5, 0, 8];

// let inStock = [];

// stock.forEach((item) => {
//   if (item != 0) {
//     inStock.push(item);
//   }
// });

// console.log(inStock);

// let inventory=["Mobile","TV"]

// prompt("Fridge")
//inlclude

// let wishlist=["Glasses","Shoes","Watch"]

// prompt(item)

// item -> "already hai"

// agar item nhi hai -> "add into wishlisg"

// let arr = [1, 2, 3, 4];

// console.log(arr.reverse());

// let arr = [5, 1, 6, 9, 0, 3];

// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//   let temp = 0;
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;

//   i++;
//   j--;
// }

// console.log(arr);

// let arr = [5, 1, 6, 9, 0, 3];

// let arr2 = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length - 1; i++) {
//   let flag = false;
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     let temp = 0;
//     if (arr[j] > arr[j + 1]) {
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       flag = true;
//     }
//     if (flag == false) {
//       break;
//     }
//   }
// }

// console.log(arr);

// let arr = [2, 6, 1, 8, 5];

// console.log(
//   arr.map((element) => {
//     return element * 2;
//   })
// );

// let ans = arr.map((element) => {
//   return element * 2;
// });

// console.log(arr);

// console.log(ans);

// arr.map();

// let salaries = [10000, 30000, 20000, 50000];

// let output = salaries.map((item) => {
//   return item + 1000;
// });

// console.log(output);

// // length of each word in this array
// let fruits = ["apple", "banana", "litchi", "kiwi"];

// let word = fruits.map((fruit) => {
//   return fruit.length;
// });

// console.log(word);

// let marks = [50, 28, 75, 10, 65];

// let output = marks.filter((pankaj) => {
//   return pankaj > 30;
// });

// console.log(output);

// function sample(arr) {
//   return arr.map((name) => {
//     return name.toUpperCase();
//   });
// }

// let names = ["vishal", "pranav", "sohail", "shivtej"];

// console.log(sample(names));

// function ToPassStudent(marksInTheory) {
//   let totalMarks = marksInTheory.map((student) => {
//     return student + 20;
//   });

//   return totalMarks.filter((item) => {
//     return item > 40;
//   });
// }

// let marksInTheory = [10, 50, 15, 60, 5];

// console.log(ToPassStudent(marksInTheory));

// let sum = 0;

// for (let i = 0; i < marksInTheory.length; i++) {
//   sum = sum + marksInTheory[i];
// }

// console.log(sum);

// let arr = [10, 50, 15, 60, 5];

// let output = arr.reduce((acc, current) => {
//   acc = acc + current;
//   return acc;
// }, 0);

// console.log(output);

// let arr = [10, 50, 15, 60, 5];

// let ans = arr.reduce((max, cuurent) => {
//   if (cuurent > max) {
//     max = cuurent;
//   }
//   return max;
// }, arr[0]);

// console.log(ans);

// const transform = (arr, fn) => {
//   return arr.map(fn);
// };

// const double = (num) => num * 2;
// const square = (num) => num ** 2;

// const result = transform([1, 2, 3, 4], (n) => {
//   return square(double(n));
// });

// console.log(result);

// let arr = [2, 5, 1, 8, 4];

let average =
  arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0) / arr.length;

// console.log(average);
