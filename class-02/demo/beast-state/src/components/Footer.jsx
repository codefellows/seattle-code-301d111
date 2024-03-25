import Navbar from 'react-bootstrap/Navbar';

export default function Footer(props) {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <p>{props.text}</p>
      </Navbar.Brand>
    </Navbar>

  );
}

