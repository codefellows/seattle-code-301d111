import { useState } from 'react'
import {If, Then, Else} from 'react-if';
import Trinkets from './components/Trinkets.jsx';

const VITE_API_SERVER = import.meta.env.VITE_API_SERVER;

function App() {

  const [trinkets, setTrinkets] = useState([]);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState('');

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getLocation();
  }

  async function getLocation() {
    // let url = `https://us1.locationiq.com/v1/search?key=${LOCATION_API_KEY}&q=${city}&format=json`;
    let url = `${VITE_API_SERVER}/location?city=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    setLocation(data);

    getTrinkets();
  }

  async function getTrinkets() {
    let url = `${VITE_API_SERVER}/trinkets?city=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    setTrinkets(data);
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
         <input onChange={handleChangeCity} />
        </form>
      </section>

      <section>
        <If condition={location.display_name}>
          <Then>
            <h2>{location.display_name}</h2>
            <p>Latitude: {location.lat}, Longitude: {location.lon}</p>
          </Then>
          <Else>
            <p>Search for a city using the form above</p>
          </Else>
        </If>
      </section>

      <section>
        {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${LOCATION_API_KEY}&center=${location.lat},${location.lon}&zoom=10`} alt="Map" /> */}
      </section>

      <Trinkets trinkets={trinkets} />

    </>
  )
}

export default App
