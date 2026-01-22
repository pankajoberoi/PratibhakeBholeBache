let URL = "https://jsonplaceholder.typicode.com/users";

let UlTag = document.querySelector("#list");

async function getData() {
  let data = await fetch(URL);
  console.log(data);
  let output = await data.json();
  console.log(output);

  output.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item.username;
    UlTag.append(listItem);
  });
}

getData();
