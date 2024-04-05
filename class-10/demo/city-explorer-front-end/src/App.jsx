import { useState } from 'react'
import axios from 'axios';

import SearchForm from './components/SearchForm.jsx';
import City from './components/City.jsx';
import Map from './components/Map.jsx';
import Weather from './components/Weather.jsx';
import Movies from './components/Movies.jsx';

const API = import.meta.env.VITE_API_URL;

function App() {

  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);

  async function handleSearch(city) { 

    let locationURL = `${API}/location?city=${city}`;
    let response = await axios.get(locationURL);
    let data = response.data;
    setLocation(data);

    // Now that we have location data, we can fetch all sorts of things from our API ...
    getWeather(data);
    getMovies(data);

  }

  async function getMovies(location) {
    let url = `${API}/movies?latitude=${location.latitude}&longitude=${location.longitude}`;
    let response = await axios.get(url);
    let data = response.data;
    setMovies(data);
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
      <Map location={location} />
      <Weather weather={weather} />
      <Movies movies={movies} /> 
    </>
  )
}

export default App
