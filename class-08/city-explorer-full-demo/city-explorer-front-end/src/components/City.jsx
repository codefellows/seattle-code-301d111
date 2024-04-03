import {If,Then} from 'react-if';

const KEY = import.meta.env.VITE_LOCATION_API_KEY;

function City(props) {

  return (

    <>

      <If condition={props.location.name}>
        <Then>
          <h2>All About {props.location.name}</h2>
        </Then>
      </If>

      <If condition={props.location.latitude && props.location.longitude}>
        <Then>
            <img
                src={`https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${props.location.latitude},${props.location.longitude}&zoom=12`}
                alt={`Map of {props.location.name}`}
            />
        </Then>
      </If>

    </>

  );

}

export default City;