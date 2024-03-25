import Navbar from 'react-bootstrap/Navbar';


function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <h1>
          {props.title}
        </h1>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
