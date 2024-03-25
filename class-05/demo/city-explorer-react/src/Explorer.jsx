import { useState } from 'react';
import Map from './Map';
import Restaurants from './Restaurants';
import locationData from './fake-data/location.json';
import restaurantsData from './fake-data/restaurants.json';
import map from './images/map.png';

function Explorer() {
  const [displayResults, setDisplayResults] = useState(false);

  function handleLocationSearch(event) {
    event.preventDefault();
    setDisplayResults(true);
  }

  return (
    <div id="main">
      <form onSubmit={handleLocationSearch} id="search-form">
        <label>Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>

      {displayResults &&
        <div>
          <Map
            location={locationData}
            map={map}
          />
          <Restaurants
            restaurants={restaurantsData}
            location={locationData}
          />
        </div>
      }
    </div>
  )
}

export default Explorer;
