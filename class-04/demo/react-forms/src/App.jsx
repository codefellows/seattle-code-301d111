import { useState } from 'react';
import Header from './Header.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {

  const [username, setUsername] = useState('user');

  function handleFormSubmitted(event) {
    event.preventDefault();
    console.log('submitted');
  }

  function handleUsernameTyped(event) {
    if (event.target.value.length > 0) {
      setUsername(event.target.value);
    } else {
      setUsername('user');
    }
  }

  return (
    <div>
      <Header potato={username} />
      <form onSubmit={handleFormSubmitted}>
        <label htmlFor="name">Name</label>

        <input id="name" name="name" type="text" onInput={handleUsernameTyped} />
        <br />
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" id="dob" />
        <br />
        <input type="submit" />
      </form>
      <Container>
        <Form>
          <Form.Group controlId="bootstrapName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onInput={handleUsernameTyped} />
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default App;
