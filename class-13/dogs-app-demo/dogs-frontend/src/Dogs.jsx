import {useState, useEffect} from 'react';
import axios from 'axios';
import {When} from 'react-if';

import DogEditForm from './DogEditForm.jsx';

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
    
    // List of dogs from the database in an array
    const [dogs, setDogs] = useState([]);

    // Hold the id of the dog we want to edit
    const [selectedDog, setSelectedDog] = useState('');

   // Effect Hook
   // Watches for a variable to change and then runs code
   // We're going to watch [] which means it will run once and only once
   useEffect( () => {
     getDogs();
   }, []);
 
   // FUNCTIONS TO TALK TO THE BACK END
   async function getDogs() { 
     try {
       const response = await axios.get('http://localhost:3000/dogs');
       console.log(response.data);
       setDogs(response.data);
     } catch (error) {
       console.error(error);
     }
   }

   // if id is "17"
   // axios will request DELETE http://localhost:3000/dogs/17 from the server
   async function deleteDog(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/dogs/${id}`);
      let deletedDog = response.data;

      // Once we delete the dog in the DB, the front-end needs to show the change
      // We have to filter the dogs array in state to remove the deleted dog
      let newDogs = dogs.filter( function(dog) {
        return dog._id !== deletedDog._id;
      });
      setDogs(newDogs);
      
    } catch (error) {
      console.error(error);
    } 
   }

   async function addDog(dog) {
     try {
       // "dog" in this case is the request.body on the server's post route ...
       let response = await axios.post('http://localhost:3000/dogs', dog);
       let newDog = response.data;
       setDogs([...dogs, newDog]);
     } catch(error) {
       console.error(error);
     }
   }

   async function updateDog(dog) {
    try {
      let response = await axios.put(`http://localhost:3000/dogs/${dog._id}`, dog);
      let updatedDog = response.data;

      let updatedDogList = dogs.map( function(d) {
        if ( d._id === updatedDog._id ) { return updatedDog; }
        else { return d }
      });  

      setDogs(updatedDogList);
    
    } catch(error) {
      console.error(error);
    }
   }


   // EVENT HANDLERS 

    function handleDeleteDog(event) { 
      let id = event.target.id;
      deleteDog(id);
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
      addDog(doggieData);
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
            {dogs.map(dog => 
                <div key={dog._id}>
                    <h2>{dog.name}</h2>
                    <p>Age: {dog.age}</p>
                    <p>Breed: {dog.breed}</p>
                    <p>Color: {dog.color}</p>
                    <p>Has a Tail: {dog.hasTail.toString()}</p>
                    <button id={dog._id} onClick={handleDeleteDog}>Delete Me</button>
                    <button onClick={ () => setSelectedDog(dog._id) }>Edit Me</button>
                    <When condition={selectedDog === dog._id}>
                      <DogEditForm dog={dog} updateDog={updateDog} />
                    </When>
                </div>
            )
            }
        </section>
      </>
    );

}

export default Dogs;