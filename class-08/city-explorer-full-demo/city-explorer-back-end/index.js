'use strict';

// 3rd party dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Application setup
const app = express();

// Allows access to our app from client applications like our react app
app.use(cors());

// Route definitions
app.get('/location', getLocation);
app.get('/weather', getWeather);
app.get('*', handleNotFound);

// Route Handlers
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

async function getWeather(req, res) {
  let lat = req.query.latitude;
  let lon = req.query.longitude;
  let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}&days=5&units=I`;

  let axiosResponse = await axios.get(url);
  let weatherData = axiosResponse.data;

  let weather = weatherData.data.map( day => {
    return new Weather(day);
  });

  res.json(weather);

}

function handleNotFound(req, res) {
  res.status(404).send('These are not the droids you are looking for.');
}


// Classes
class Location {
  constructor(locationData) {
    this.name = locationData.display_name;
    this.latitude = locationData.lat;
    this.longitude = locationData.lon;
  }
}

class Weather {
  constructor(weatherData) {
    this.forecast = weatherData.weather.description;
    this.low = weatherData.low_temp;
    this.high = weatherData.high_temp;
    this.date = weatherData.datetime;
  }
}


// Start the server
function startServer() {
  let PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();


