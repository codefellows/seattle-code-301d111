'use stric';

const axios = require('axios');

// Cache Object:
/*
  {
    "seattlewa": { },
    "portlandor": { },
    "sanfranciscoca": { },
  }
*/

let cache = {};

async function getLocation( req, res ) {

  // http://localhost:3000/location?city=seattle
  // ? starts the query string
  // key value pairs after that ... so request.query is an object that we can reference
  let city = req.query.city;

  // Check if the city is in the cache
  // Make a key that's all lower case and has no spaces or commas
  // Seattle, WA becomes seattlewa
  let key = city.toLowerCase();
      ket = key.replace(" ", "");
      key = key.replace(",", "");

  if( cache[key] ) {
    console.log(`We had ${key} in the cache!`, cache[key]);
    res.json(cache[key]);
    return;
  }

  console.log(`We didn't have ${key} in the cache, so let's get it`);
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API_KEY}&q=${city}&format=json`;
  let axiosResponse = await axios.get(url);
  let locationData = axiosResponse.data;
  let location = new Location(locationData[0]);
  // Store this location object into the cache ...
  cache[key] = location;
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