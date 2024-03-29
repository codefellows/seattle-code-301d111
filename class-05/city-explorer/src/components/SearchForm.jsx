import {useState} from 'react';
import axios from 'axios';

function SearchForm(props) {
  const [city, setCity] = useState('');

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // get location from the server: http://127.0.0.1:8080/location.json
    let response = await axios.get("http://127.0.0.1:8080/location.json");
    let location = response.data;
    props.setLocation(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" placeholder="Enter Location" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchForm;
