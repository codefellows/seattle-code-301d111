function getPokemon() {
  console.log("Getting Pokemon");
  console.log("=============================");

  // This is a promise, it happens out of order and "comes back" at a later time
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((results) => {
      results
        .json()
        .then((data) => {
          console.log(data.abilities);
        })
        .catch((error) => {
          console.error("Data Error: " + error.message);
        });
    })
    .catch((error) => {
      console.error("Fetch occured: " + error.mesage);
    });

  console.log("I think I'm done");
  console.log("=============================");
}

async function getPokemonWithAsyncAndAwait() {
  let data = "";

  console.log("Getting Pokemon");
  console.log("=============================");

  // This is a promise, it happens out of order and "comes back" at a later time
  try {
    let results = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    data = await results.json();
    console.log(data.abilities);
  } catch (error) {
    console.error("Error: " + error.message);
  }

  console.log("I think I'm done");
  console.log("=============================");
}

console.log("==== Old School Promises ====");
getPokemon();

getPokemonWithAsyncAndAwait();

