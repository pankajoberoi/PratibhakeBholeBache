console.log("hello");

// click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove, mouseover, mouseout, and contextmenu.

let button = document.getElementById("btn");

button.addEventListener("click", GreetMessage);

button.addEventListener("click", GreetMessage2);

function GreetMessage() {
  alert("Good morning mitron!!");
}

function GreetMessage2() {
  console.log("Good night mitron!!!");
}
