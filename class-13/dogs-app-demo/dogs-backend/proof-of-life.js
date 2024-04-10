'use strict';

require('dotenv').config();
const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

// Handle the default route
app.get('/', (request, resonse) => {
    response.json({message: 'This is the doggie server'});
})

app.get('/dogs', handleGetDogs);

// Handle all unknown routes
app.get('*', (request, response) => {
    response.status(404).json({message: 'Not Found'});
});

// Handle all errors
app.use((error, request, response, next) => {
    console.error(error);
    response.status(500).json({message: 'Internal Server Error'});
});

// Round Handlers ...
function handleGetDogs(request, response) {
    response.json([{message: 'Dogs Go Here'}]);
}

// Connect to the database and start the server
function startServer() {
    const PORT = process.env.PORT || 3000;
    const DATABASE_URL = process.env.DATABASE_URL;
    mongoose.connect(DATABASE_URL);
    app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); });
}

startServer();