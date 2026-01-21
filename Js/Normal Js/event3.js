// let Trackarea = document.getElementById("trackarea");
// let coords = document.getElementById("coords");

// console.log(Trackarea);

// Trackarea.addEventListener("mousemove", (e) => {
//   console.log(e);
//   coords.innerHTML = `X : ${e.offsetX} Y : ${e.offsetY} `;
// });

// dblclick / click;

// let Dabba = document.querySelector(".container");
// let Button = document.querySelector("#btn");

// Button.addEventListener("click", () => {
//   let box = document.createElement("div");
//   box.className = "boxy";
//   box.style.cssText = `
//                         width:60px; height:60px;
//                         background:hsl(${Math.random() * 360},70%,60%);
//                         display:inline-block; margin:5px`;

//   Dabba.append(box);
//   console.log(box);

//   box.addEventListener("dblclick", () => box.remove());
// });

// document.addEventListener("keydown", (e) => {
//   if (e.ctrlKey && e.key == "m") {
//     alert("custom short cut");
//   }
// });

// let Box = document.querySelector(".box");

// let topPos = 100;
// let leftPos = 100;

// document.addEventListener("keydown", (e) => {
//   let step = 10;
//   if (topPos >= 0 && topPos <= 250) {
//     if (e.key === "ArrowDown") {
//       if (topPos == 250) {
//         topPos = 250;
//       } else {
//         topPos += step;
//       }
//     } else if (e.key === "ArrowUp") {
//       if (topPos == 0) {
//         topPos = 0;
//       } else {
//         topPos -= step;
//       }
//     }
//   }
//   if (leftPos >= 0 && leftPos < 250) {
//     if (e.key === "ArrowRight") {
//       leftPos += step;
//     } else if (e.key === "ArrowLeft") {
//       leftPos -= step;
//     }
//   }

//   Box.style.top = topPos + "px";
//   Box.style.left = leftPos + "px";
// });
