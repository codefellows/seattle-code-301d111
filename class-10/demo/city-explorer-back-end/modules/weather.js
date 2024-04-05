'use strict';

const axios = require('axios');

let cache = {};

/*
  What should the cache key be?
  latitude and longitude are unique to a location
  The key could be latitude:longitude
  The value could be: 
    {
      timestamp: number,
      forecast: [weather objects]
    }
*/

async function getWeather(req, res) {
  let lat = req.query.latitude;
  let lon = req.query.longitude;
  
  let key = `${lat}:${lon}`;

  // if we have the lat/long in the cache, send that
  // Really, we need to check the time

  if(cache[key]) { 
    // cache[key].timestamp // is the time that we created this cache
    // cache[key].forecast is the array of objects
    let now = Date.now();
    let timePassed = (now - cache[key].timestamp)/1000;
    if(timePassed < 3600) {
      console.log('Time passed:', timePassed);
      console.log('We had the weather in the cache', cache[key]);
      res.json(cache[key].forecast);
      return;
    }
  }

  console.log('No weather in the cache, let\'s get it!');

  let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}&days=5&units=I`;
  
  let axiosResponse = await axios.get(url);
  let weatherData = axiosResponse.data;
  
  let weather = weatherData.data.map( day => {
    return new Weather(day);
  });
  
  cache[key] = {
    timestamp: Date.now(),
    forecast: weather
  };

  res.json(weather);
  
}

class Weather {
  constructor(weatherData) {
    this.forecast = weatherData.weather.description;
    this.low = weatherData.low_temp;
    this.high = weatherData.high_temp;
    this.date = weatherData.datetime;
  }
}

module.exports = getWeather;