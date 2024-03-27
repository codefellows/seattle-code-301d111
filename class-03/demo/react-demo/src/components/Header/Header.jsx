import "./header.css";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Header</h1>
    </header>
  )
}

export default Header;
