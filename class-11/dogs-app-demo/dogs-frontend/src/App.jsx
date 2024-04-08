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

  return (
    <>
      <Dogs dogs={dogs} />
    </>
  )
}

export default App
