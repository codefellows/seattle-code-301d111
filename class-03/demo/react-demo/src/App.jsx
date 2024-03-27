import { useState } from 'react'

import Person from './components/Person/Person';
import Header from './components/Header/Header';

// By declaring an attribute in our JSX, that becomes a "prop" that we can access in the component
// <component attribute="value" />
// in the component, we can look now at props.attribute
// i.e.
//   <Content startAt={10} />
//   In the content component, props.startAt will be 10

let people = [
  {
    id: 1321,
    name: "Alice",
    count: 0,
  },
  {
    id: 5398,
    name: "Bob",
    count: 0,
  },
  {
    id: 4987,
    name: "Charlie",
    count: 0,
  }
];

function App() {

  const [list, setList] = useState(people);

  // Receives the count and name from the Person Component
  // Filters if the person has 5 or more votes
  function handleVote( person ) {

    person.count++;

    let newList = list.map( personObject => {
      if( personObject.id === person.id ) { return person; }
      else { return personObject; }
    });

    // newList = newList.filter( (name) => {
    //   // true if not the name or if the name is the same and the count is <= 5
    //   return name !== person || person === name && num < 5;
    // });

    setList(newList);


  }

  return (
    <>
      <Header />
      {
        list.map((personObject, index) => {
          return <Person key={personObject.id} person={personObject} handleVote={handleVote} />
        })
      }
    </>
  )
}

export default App
