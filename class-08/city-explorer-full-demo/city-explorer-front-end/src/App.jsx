import { useState } from 'react'
import axios from 'axios';

import SearchForm from './components/SearchForm.jsx';
import City from './components/City.jsx';
import Weather from './components/Weather.jsx';

const API = import.meta.env.VITE_API_URL;

function App() {

  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState([]);

  async function handleSearch(city) { 
    let locationURL = `${API}/location?city=${city}`;
    let response = await axios.get(locationURL);

    let data = response.data;
    setLocation(data);

    // Send "data" not "location" because "location" is a state variable and because setState is async, we may not have access yet.
    getWeather(data);
    
    // getMovies(data);

  }

  async function getMovies(location) {

  }

  async function getWeather(location) {
    let url = `${API}/weather?latitude=${location.latitude}&longitude=${location.longitude}`;
    let response = await axios.get(url);
    let data = response.data;
    setWeather(data);
  }


  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      <City location={location} />
      <Weather weather={weather} />
    </>
  )
}

export default App
