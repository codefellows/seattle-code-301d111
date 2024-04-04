import {If,Then} from 'react-if';

const KEY = import.meta.env.VITE_LOCATION_API_KEY;

function Map(props) {

  return (

    <>
      <If condition={props.location.latitude && props.location.longitude}>
        <Then>
            <section>
              <img
                src={`https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${props.location.latitude},${props.location.longitude}&zoom=12`}
                alt={`Map of {props.location.name}`}
              />
            </section>
        </Then>
      </If>
    </>

  );

}

export default Map;