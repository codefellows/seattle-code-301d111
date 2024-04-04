'use strict';

const axios = require('axios');

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

class Weather {
  constructor(weatherData) {
    this.forecast = weatherData.weather.description;
    this.low = weatherData.low_temp;
    this.high = weatherData.high_temp;
    this.date = weatherData.datetime;
  }
}

module.exports = getWeather;