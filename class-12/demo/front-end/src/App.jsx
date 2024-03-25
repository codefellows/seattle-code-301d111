import { useEffect, useState } from 'react';
import axios from 'axios';
import Cats from './Cats';
import CreateCat from './CreateCat'; // new
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink, // new
} from "react-router-dom";

const SERVER = import.meta.env.VITE_SERVER_URL;
const API_URL = `${SERVER}/cats`;


function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats(location = null) {

    let url = API_URL;

    if (location) {
      url += `?location=${location}`;
    }

    try {
      const response = await axios.get(url);
      setCats(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLocationSubmit(event) {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location }); // note the use of object destructuring
    fetchCats(location);
  }

  async function handleCatCreate(catInfo) {
    const response = await axios.post(API_URL, catInfo);
    const newCat = response.data;
    setCats([...cats, newCat]);
  }

  async function handleDelete(catToDelete) {
    const url = `${API_URL}/${catToDelete._id}`;

    try {
      const response = await axios.delete(url);
      const filteredCats = cats.filter(cat => cat._id !== catToDelete._id);
      setCats(filteredCats);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <BrowserRouter>
        <nav>
          <h1>World of Cats</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/create">Create</NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={
            <div>
              <Cats cats={cats} onDelete={handleDelete} />
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
          {/* new */}
          <Route path="/create" element={
            <CreateCat onCreate={handleCatCreate} />
          } />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App;
