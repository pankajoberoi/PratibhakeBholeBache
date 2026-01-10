// let element = document.getElementById("heading");

// console.log(element);

// innertext vs textcontent

// console.log(element.innerText);

// console.log(element.textContent);

// element.textContent = "Ghar jao jaldi";

// console.log(element.innerHTML);

// element.innerHTML = "Chalo ruk jao";

// element.style.color = "blue";

// let Name = prompt("Enter your name");

// if (Name) {
//   element.innerText = "Good Morning!!!!" + Name;
// } else {
//   element.innerText = "Good Morning!!!!" + " User ";
// }

// let paragraph = document.getElementById("para");

// console.log(paragraph);

// let output = document.getElementsByClassName("heading2");

// console.log(output);

// output[0].innerHTML = "Pankaj";

// for (let i = 0; i < output.length; i++) {
//   output[i].style.color = "blue";
// }

// output[1].style.background = "pink";

// let element = document.getElementsByTagName("p");

// console.log(element);

// let element = document.querySelector("#heading");
// console.log(element);

// let element2 = document.querySelectorAll(".heading2");
// console.log(element2);

// let element3 = document.querySelectorAll("p");
// console.log(element3);

let display = document.querySelector(".screen");

let element = document.createElement("h1");

element.innerText = "I am Dynamic one";

console.log(element);

display.appendChild(element);

// attributes;
// classlist;
//prepend
// append
//delete
