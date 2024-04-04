'use stric';

const axios = require('axios');

async function getLocation( req, res ) {

  // http://localhost:3000/location?city=seattle
  // ? starts the query string
  // key value pairs after that ... so request.query is an object that we can reference
  let city = req.query.city;
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API_KEY}&q=${city}&format=json`;
    
  let axiosResponse = await axios.get(url);
  let locationData = axiosResponse.data;
  
  let location = new Location(locationData[0]);
    
  res.json(location);
 }

class Location {
  constructor(locationData) {
    this.name = locationData.display_name;
    this.latitude = locationData.lat;
    this.longitude = locationData.lon;
  }
}



  module.exports = getLocation;