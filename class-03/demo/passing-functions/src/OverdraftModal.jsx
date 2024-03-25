import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function OverdraftModal(props) {

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Overdraft Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is the last time!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
