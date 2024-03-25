import { useEffect, useState } from 'react';
import axios from 'axios';
import Cats from './Cats';
import CatForm from './CatForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const SERVER = import.meta.env.VITE_SERVER_URL;

function App() {

  const [cats, setCats] = useState([]);

  async function fetchCats() {
    try {
      const response = await axios.get(`${SERVER}/cats`);
      setCats(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCats();
  } , []);

  async function handleCreate(catInfo) {
    try {
      const response = await axios.post(`${SERVER}/cats`, catInfo);
      const newCat = response.data;
      setCats([...cats, newCat]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(catToUpdate) {
    try {

      const updatedCats = cats.map(existingCat => {
        if (existingCat._id === catToUpdate._id) {
          return catToUpdate;
        } else {
          return existingCat;
        }
      });

      setCats(updatedCats);

      await axios.put(`${SERVER}/cats/${catToUpdate._id}`, catToUpdate);

    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${SERVER}/cats/${id}`);
      const remainingCats = cats.filter(cat => cat._id !== id);
      setCats(remainingCats);
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <Container>
        <h1>World of Cats</h1>
        <CatForm onCreate={handleCreate} />
        <Cats cats={cats} onDelete={handleDelete} onUpdate={handleUpdate} />
      </Container>
    )
  }

export default App;
