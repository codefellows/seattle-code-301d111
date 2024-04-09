import {useState} from 'react';

function Dogs(props) { 

    /*
      {
        name: 'Fred', 
        breed: 'Bulldog', 
        color: 'Brindle', 
        age: '3', 
        hasTail: false
      }
    */
    const [doggieData, setDoggieData] = useState({});

    async function deleteTheDog(event) {
      let id = event.target.id;
      props.handleDelete(id);
    }

    function handleChange(event) {
      let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      setDoggieData({
        ...doggieData,
        [event.target.name]: value
      });
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(doggieData)
      props.handleAddDog(doggieData);
    }

    return (
      <>
        <h2>Dogs</h2>
        <form onSubmit={handleSubmit}>
          <div><input name="name" type="text" placeholder="Name" onChange={handleChange} /></div>
          <div><input name="breed" type="text" placeholder="Breed" onChange={handleChange} /></div>
          <div><input name="color" type="text" placeholder="Color" onChange={handleChange} /></div>
          <div><input name="age" type="text" placeholder="Age" onChange={handleChange} /></div>
          <div><input name="hasTail" type="checkbox" onChange={handleChange} /><span>Has Tail?</span></div>
          <button type="submit">Add Dog</button>
        </form>
        <section>
            {props.dogs.map(dog => 
                <div key={dog._id}>
                    <h2>{dog.name}</h2>
                    <p>Age: {dog.age}</p>
                    <p>Breed: {dog.breed}</p>
                    <p>Color: {dog.color}</p>
                    <p>Has a Tail: {dog.hasTail.toString()}</p>
                    <button id={dog._id} onClick={deleteTheDog}>Delete Me</button>
                </div>
            )
            }
        </section>
      </>
    );

}

export default Dogs;