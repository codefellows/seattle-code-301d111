import { useEffect, useState } from 'react';
import axios from 'axios';
import Cats from './Cats';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const SERVER = import.meta.env.VITE_SERVER_URL;


function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats(location = null) {
    let apiUrl = `${SERVER}/cats`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      setCats(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLocationSubmit(event) {
    event.preventDefault();
    const location = event.target.location.value;
    fetchCats(location);
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>World of Cats</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={
            <div>
              <Cats cats={cats} />
              <h2>Filter by location</h2>
              <form onSubmit={handleLocationSubmit}>
                <input name="location" />
                <button>ok</button>
              </form>
            </div>
          } />
          <Route path="/about" element={
            <h1>About Page Here</h1>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
