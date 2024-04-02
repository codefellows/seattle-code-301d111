'use strict';

// read the contents of the .env file into the "environment"
require('dotenv').config();
const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

// Allow any client to make requests to this server
app.use(cors());

// home route
// responds to requests for the / path
// http://localhost:3000
app.get('/', (request, response) => {
  response.send('<h1>This is some html!</h1>');
});

// trinkets route
// responds to requests for the /trinkets path
// http://localhost:3000/trinkets
app.get('/trinkets', (request, response) => {

  let trinkets = [
    { name: 'ring', color: 'gold' },
    { name: 'necklace', color: 'silver' },
    { name: 'paperclips', color: 'grey' },
    { name: 'pen', color:'blue'}
  ];

  // import the weather.json and use .filter() to parse and return only the weather for the right city

  response.json(trinkets);
});

// repsponds to requests for the /location path
// http://localhost:3000/location
// get data from location IQ and send it back to the client
app.get('/location', getLocation);

async function getLocation(request, response) {
  // http://localhost:3000/location?city=Tampa,FL&john=bald&geno=Saffy&cathy=working
  // query params are key/value pairs from the URL, after the ?, separated by &
  // request.query = { city: 'Tampa,FL', john: 'bald', geno: 'Saffy', cathy: 'working' }
  console.log(request.query);

  let city = request.query.city || "New York, NY";

  let url = `https://us1.locationiq.com/v1/search?key=${process.env.LOCATION_API_KEY}&q=${city}&format=json`;
  const apiResponse = await axios.get(url);
  const data = apiResponse.data;
  response.json( data[0] );
}


// Dev enviornment ... http://localhost:3000 is now a server
function startServer() {
  let PORT = process.env.port || 3000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

startServer();
