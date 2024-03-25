function Map(props) {

  return (
    <div id="map">
      <h3>Map of {props.location.search_query}</h3>
      {props.map &&
        <img src={props.map} />
      }
    </div>
  )
}

export default Map;
