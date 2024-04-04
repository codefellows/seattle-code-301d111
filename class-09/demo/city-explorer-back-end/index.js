'use strict';

// 3rd party dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import our modules
const getLocation = require('./modules/location.js');
const getWeather = require('./modules/weather.js');
const getMovies = require('./modules/movies.js');

// Application setup
const app = express();

// Allows access to our app from client applications like our react app
app.use(cors());

// Route definitions
app.get('/location', getLocation);
app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('*', handleNotFound);


function handleNotFound(req, res) {
  res.status(404).send('These are not the droids you are looking for.');
}

// Start the server
function startServer() {
  let PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();


