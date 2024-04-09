import { useState, useEffect } from 'react'
import axios from 'axios';

import Dogs from './Dogs.jsx';

function App() {

  const [dogs, setDogs] = useState([]);

  // Effect Hook
  // Watches for a variable to change and then runs code
  // We're going to watch [] which means it will run once and only once
  useEffect( () => {
    getDogs();
  }, []);

  async function getDogs() { 
    try {
      const response = await axios.get('http://localhost:3000/dogs');
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

  return (
    <>
      <Dogs handleAddDog={addDog} handleDelete={deleteDog} dogs={dogs} />
    </>
  )
}

export default App
