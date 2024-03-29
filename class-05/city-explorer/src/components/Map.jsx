import {When} from 'react-if';

function Map(props) {
  // We really to use props.latitude and props.longitude to display the map from a real place
  return (
    <When condition={props.location.latitude && props.location.longitude}>
      <section className="map">
        <img src="https://gisgeography.com/wp-content/uploads/2020/06/Seattle-Map-Feature.jpg" width="300" />
      </section>
    </When>
  )
}

export default Map;
