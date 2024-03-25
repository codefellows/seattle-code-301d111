function Header( props ) {
  /*
    React does this ... for you!
    -------------------------------------------------
    let header = document.createElement('header');
    let h1 = document.createElement('h1');
    h1.textContent = '301 is cool';
    header.appendChild(h1);


    PROPS:
    <Header title="301 is HARD!" />
    is the same as
    Header( {title: "301 is HARD!"} )

  */
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header;
