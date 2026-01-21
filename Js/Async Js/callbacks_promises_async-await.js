console.log("hello");

// function sum(a, b) {
//   return a + b;
// }

// function calculator(a, b, callback) {
//   return callback(a, b);
// }

// console.log(
//   calculator(2, 3, (a, b) => {
//     return 2 + 3;
//   }),
// );

// console.log(
//   calculator(5, 3, function (a, b) {
//     return a - b;
//   }),
// );

// ======================================================================
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data for : " + dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// console.log("Getting data for id 1");
// getData(1, () => {
//   console.log("Getting data for id 2");
//   getData(2, () => {
//     console.log("Getting data for id 3");
//     getData(3, () => {
//       console.log("Getting data for id 4");
//       getData(4);
//     });
//   });
// });
// ==============================================================

// const result = new Promise((resolve, reject) => {
//   console.log("Hello User your ordered a iphone");
//   setTimeout(() => {
//     reject("Order not delivered due to rain");
//   }, 5000);
// });

// result.then((res) => {
//   console.log(res);
//   console.log("Mail is sent to your inbox");
// });

// result.catch((err) => {
//   console.log(err);
//   console.log("Refund is applicable for your order!!");
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data for : " + dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }

// console.log("Getting Data for id 1");
// getData(1).then(() => {
//   console.log("Getting Data for id 2");
//   getData(2).then(() => {
//     console.log("Getting Data for id 3");
//     getData(3).then(() => {
//       console.log("Getting Data for id 4");
//       getData(4);
//     });
//   });
// });

// ====================================================================

// async function instagram() {
//   console.log("welcome user");
// }

// let result = instagram();
// console.log(result);

// function apiDelhi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data for Delhi");
//       resolve("Data captured");
//     }, 6000);
//   });
// }

// function apiPune() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data for Pune");
//       reject("Data Failed");
//     }, 3000);
//   });
// }

// function apiChennai() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data for Chennai");
//       resolve("Data captured");
//     }, 1000);
//   });
// }

// console.log("Template loading");

// async function weatherApplication() {
//   await apiDelhi(); //6
//   await apiPune(); //3
//   await apiChennai(); //1
// }

// console.log("Template loaded , program exit");

// weatherApplication();

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data for : " + dataId);
      resolve("Success");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
}

getAllData();
