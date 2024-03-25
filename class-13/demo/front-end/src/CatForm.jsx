import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CatForm({ onCreate }}) {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [hasClaws, setHasClaws] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    onCreate(this.state);
  };

  functtion handleNameChange(event) {
    setName(event.target.value);
  };

  function handleColorChange(event) {
    setColor(event.target.value);
  };

  function handleClawChange(event) {
    setHasClaws(event.target.checked);
  };


  return (
    <Form onSubmit={handleSubmit} className="p-4">
      <Form.Label>
        <h2>
          Create a Cat
        </h2>
      </Form.Label>
      <Form.Group className="mb-3">
        <Form.Label>Cat Name</Form.Label>
        <Form.Control type="text" placeholder="Cat Name" onChange={handleNameChange} value={name} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cat Color</Form.Label>
        <Form.Control type="text" placeholder="Cat Color" onChange={handleColorChange} value={color} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Has Claws" onChange={handleClawChange} value={hasClaws} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CatForm;
