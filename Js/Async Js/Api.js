// let URL = "https://jsonplaceholder.typicode.com/users";

// let UlTag = document.querySelector("#list");

// async function getData() {
//   let data = await fetch(URL);
//   console.log(data);
//   let output = await data.json();
//   console.log(output);

//   output.map((item) => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = item.username;
//     UlTag.append(listItem);
//   });
// }

// getData();

// "https://pokeapi.co/api/v2/pokemon/name"

// input onchange -> function

// `https://pokeapi.co/api/v2/pokemon/`

// fetch ()

// print

let UlTag = document.querySelector("#list");

let Name = document.getElementById("pokemon");

Name.addEventListener("change", (e) => {
  getSpecificData(e.target.value);
});

async function getSpecificData(pokemonName) {
  let URL = `https:pokeapi.co/api/v2/pokemon/${pokemonName}`;

  let data = await fetch(URL);

  let output = await data.json();

  let heading = document.createElement("h3");
  heading.innerHTML = pokemonName;

  UlTag.append(heading);

  output.abilities.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item.ability.name;

    UlTag.append(listItem);
  });
}
