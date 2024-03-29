import {useState} from 'react';

import {If, Then, Else} from 'react-if';

import Map from "./Map.jsx";
import SearchForm from './SearchForm.jsx';
import Restaurants from './Restaurants.jsx';

function Explorer() {

  const [location, setLocation] = useState({});

  return (
    <>

      <If condition={location.formatted_query}>
        <Then>
          <h2>All About {location.formatted_query}</h2>
        </Then>
        <Else>
          <h3>Use the search bar above to search for a city</h3>
        </Else>
      </If>

      <SearchForm setLocation={setLocation} />
      <Map location={location} />
      <Restaurants location={location} />
    </>
  )


}

export default Explorer;
