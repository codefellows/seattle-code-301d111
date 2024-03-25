import axios from 'axios';
import { useEffect,, useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SERVER = 'http://localhost:3001';

function App() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => { getSnacks(); }, []);

  async function getSnacks() {
    try {
      const response = await axios.get(`${SERVER}/snacks`);
      setSnacks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createSnack(snackInfo) {
    try {
      const response = await axios.post(`${SERVER}/snacks`, snackInfo);
      setSnacks([...snacks, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const snackInfo = {
      name: event.target.snackName.value,
      description: event.target.snackDescription.value
    };
    createSnack(snackInfo);
    getSnacks();
  };

  async function deleteSnack(id) {
    try {
      const response = await axios.delete(`${SERVER}/snacks/${id}`);
      getSnacks();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Label>Create a Snack</Form.Label>
        <Form.Group controlId="snackName">
          <Form.Control type="text" placeholder="snack name" />
        </Form.Group>
        <Form.Group controlId="snackDescription">
          <Form.Control type="text" placeholder="snack description" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      {snacks.map(snack => (
        <Card key={snack._id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{snack.name}</Card.Title>
            <Card.Text>{snack.description}</Card.Text>
            <Button onClick={() => deleteSnack(snack._id)}>Eat this snack!</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
