import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

function UpdateCatForm({ cat, show, onUpdate, onClose }) {

  const _id = cat?._id;
  const [name, setName] = useState(cat?.name);
  const [color, setColor] = useState(cat?.color);
  const [hasClaws, setHasClaws] = useState(cat?.hasClaws);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdate({ _id, name, color, hasClaws });
    handleClose();
  };

  function handleNameChange(event) {
    setName(event.target.value);
  };

  function handleColorChange(event) {
    setColor(event.target.value);
  };

  function handleClawChange(event) {
    setHasClaws(event.target.checked);
  };

  function handleClose() {
    onClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update a Kitty</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="p-4">
          <Form.Label>
            <h2>
              Update a Cat
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
            <Form.Check type="checkbox" label="Has Claws" onChange={handleClawChange} checked={hasClaws} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateCatForm;
