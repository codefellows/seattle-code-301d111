import {useState} from 'react';


function Family(props) {

  const [name, setName] = useState('')
  const [displayFamily, setDisplayFamily] = useState(props.family);

  function handleFilter(event) {
    let letter = event.target.value;
    let filteredFamily = props.family.filter(person => {
      return person.name.toLowerCase().startsWith(letter);
    });
    setDisplayFamily(filteredFamily);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAddFamilyMember() {
    let newPerson = {
      id: Math.random(),
      name: name
    };

    props.setFamily( [...props.family, newPerson] );
  }

  return (
    <>
      <div>
        <h3>Filter the list by starting letter ...</h3>
        <select onChange={handleFilter}>
          <option value="">Choose Starting Letter (all)</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="e">E</option>
          <option value="f">F</option>
          <option value="g">G</option>
          <option value="h">H</option>
          <option value="i">I</option>
          <option value="j">J</option>
          <option value="k">K</option>
          <option value="l">L</option>
          <option value="m">M</option>
        </select>
      </div>
      <ul>
        {
          displayFamily.map((person, index) => {
            return (
              <li key={person.id}>
                {person.name}
              </li>
            )
          })
        }
      </ul>

      <div>
        <h3>Add New Person</h3>
        {/* <p>Name Typed In: {name}</p> */}
        <input onChange={handleChange} type="text" />
        <button onClick={handleAddFamilyMember}>Add Family Member</button>
      </div>
    </>
  )
}

export default Family;
