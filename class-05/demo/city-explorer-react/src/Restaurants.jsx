function Restaurants(props) {
  return (
    <section id="weather">
      <h3>Restaurants in {props.location.search_query}</h3>
      <ul>
        {props.restaurants && props.restaurants.map((place, idx) => (
          <li key={idx}>
            <p>Name: {place.restaurant}</p>
            <p>{place.restaurant} servers {place.cusine} food in {place.locality}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Restaurants;
