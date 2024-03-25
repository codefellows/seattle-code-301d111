import {useState} from 'react';

import '../content.css';

function Content() {

  const [name, setName] = useState("Allie");
  const [count, setCount] = useState(0);

  let rosie = {
    name: "Rosie",
    age: 9,
    breed: "Lab",
    color: "brown",
    weight: 90
  };

  let geno = {
    name: "Geno",
    age: 1,
    breed: "Staffy",
    color: "white",
    weight: 50
  };


  return (
    <main>

      <section className="deck">

        <div className="card">
          <h2>{rosie.name}</h2>
          <p>Age: {rosie.age}</p>
          <p>Breed: {rosie.breed}</p>
          <p>Color: {rosie.color}</p>
          <p>Weight: {rosie.weight}</p>
        </div>

        <div className="card">
          <h2>{geno.name}</h2>
          <p>Age: {geno.age}</p>
          <p>Breed: {geno.breed}</p>
          <p>Color: {geno.color}</p>
          <p>Weight: {geno.weight}</p>
        </div>

      </section>

      <h2 onClick={ () => setCount( count + 1 )}>Number of Clicks: {count}</h2>

    </main>
  )
}

export default Content;
