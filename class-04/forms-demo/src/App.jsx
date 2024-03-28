import { useState } from 'react'

import Header from './components/Header/Header.jsx';
import Family from './components/Family/Family.jsx';

import people from "./data/people.json";

function App() {

  // family is: a variable that is "in state" the information in it is ... the people array
  //    because it's "in state", React watches it for changes and will re-render the component
  // setFamily is: a function that can be used to change the value of family
  //    This, when you call it, "tells" react that family changed and then it re-renders the component
  const [family, setFamily] = useState(people);

  let ourTitle = "Forms Demo";

  return (
    <>
      <Header pageTitle={ourTitle} />
      <Family family={family} setFamily={setFamily} />
    </>
  )
}

export default App
