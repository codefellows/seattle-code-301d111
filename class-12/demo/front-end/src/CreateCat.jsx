import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CreateCat({ onCreate }) {

  function handleSubmit(event) => {
    event.preventDefault();
    onCreate({
      name: event.target.formName.value,
      color: event.target.formColor.value,
      location: event.target.formLocation.value,
      hasClaws: event.target.formClawsCheckbox.checked,
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter cat name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Color</Form.Label>
        <Form.Control type="name" placeholder="Enter cat color" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="name" placeholder="Enter cat location" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formClawsCheckbox">
        <Form.Check type="checkbox" label="Has claws" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
