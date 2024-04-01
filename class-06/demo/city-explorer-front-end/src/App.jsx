import { useState } from 'react'
import {When} from 'react-if';

let accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN; // get from the .env file

console.log("Access Token", accessToken);

function App() {

  const [city, setCity] = useState('')
  const [location, setLocation] = useState({});

  function handleNewCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation();
  }

  /*
Getting Location Information for lexington,ky
https://us1.locationiq.com/v1/search?key=c4ba37684e44b9&q=lexington,ky&format=json
  */

  async function getLocation() {
    // fetch the location information from the API
    let url = `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${city}&format=json`;
    try {
      let response = await fetch(url);
      let jsonData = await response.json();
      let locationData = jsonData[0];
      setLocation(locationData);
    } catch(error) {
      console.error("Error getting location information", error);
    }
  }

  console.log("LOCATION:",location);


  // Condtionally render the location information

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input placeholder="Type a City Name" onChange={handleNewCity} />
      </form>

      {
        location.display_name ?
          <section>
            <h4>Location Information For: {location.display_name}</h4>
          </section>
        : null
      }

      <When condition={location.lat && location.lon}>
        <section>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${accessToken}&center=${location.lat},${location.lon}&size=500x440&zoom=10`} />
        </section>
      </When>

    </>
  )
}

export default App
