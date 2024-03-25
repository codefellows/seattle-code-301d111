import Navbar from 'react-bootstrap/Navbar';

export default function Header(props) {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <h1>{props.title}</h1>
      </Navbar.Brand>
    </Navbar>

  );
}
