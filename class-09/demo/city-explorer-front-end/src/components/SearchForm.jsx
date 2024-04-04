import {useState} from 'react';

function SearchForm(props) {
  const [city, setCity] = useState('');

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // send it back to the App component....
    props.handleSearch(city);
  }


    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter city name"
            onChange={handleChange}
        />
        <button type="submit">Search</button>
        </form>
    );


}

export default SearchForm;