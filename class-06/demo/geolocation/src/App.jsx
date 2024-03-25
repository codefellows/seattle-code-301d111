import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({});


  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    const response = await axios.get(API);
    setLocation(response.data[0]);
  }

  return (
    <>
      <input onChange={(e) => setSearchQuery(e.target.value)} placeholder="search for a city"></input>
      <button onClick={getLocation}>Explore!</button>
      {location.place_id &&
        <h2>The city is: {location.display_name}</h2>
      }
    </>
  )
}

export default App;
