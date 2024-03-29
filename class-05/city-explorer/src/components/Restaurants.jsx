import {useState, useEffect} from 'react';
import axios from 'axios';
import {When} from 'react-if';

function Restaurants(props) {

  const [restaurants, setRestaurants] = useState([]);

  useEffect( () => {
    if( props.location.latitude && props.location.longitude ) {
      async function getRestaurants() {
        let response = await axios.get(`http://localhost:8080/restaurants.json`);
        setRestaurants(response.data);
      }
      getRestaurants();
    }
  }, [props.location]);

  return (
    <When condition={restaurants.length}>
      {
        restaurants.map( (restaurant, idx) => (
          <div key={idx}>
            <h3>{restaurant.restaurant}</h3>
            <p>{restaurant.locality}</p>
            <p>{restaurant.cuisines}</p>
          </div>
        ))
      }
    </When>
  )
}

export default Restaurants;
