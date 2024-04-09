'use strict';

require('dotenv').config();
const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
const Dogs = require('./models/dogs');

const app = express();

// Middleware that allows access to the server
app.use(cors());

// Middleware that allows access to the body of the request
app.use(express.json());


// Handle the default route
app.get('/', (request, resonse) => {
    response.json({message: 'This is the doggie server'});
})

// Special routes to set things up
app.get('/dogs/seed', seedDatabase);
app.get('/dogs/nuke', emptyDatabase);

// CRUD ROUTES

// READ
// GET /dogs
// GET /dogs?breed=lab
// GET /dogs?tail=false
// Anything after the ? is the Query String as key/value pairs and can be accessed in the request.query object
app.get('/dogs', handleGetDogs);

// DELETE
// DELETE /dogs/76
// DELETE /dogs/123
// Anything with : ahead of it is a "route paramaeter" and can be accessed in the request.params object
app.delete('/dogs/:id', handleDeleteDog);


// POST accepts an object in the body of the request
// we can see this as "request.body"
app.post('/dogs', handleCreateDog);


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
async function handleGetDogs(request, response) {
    // Get all the dogs from the database
    let filterQuery = {};
    const dogs = await Dogs.find(filterQuery);
    response.json(dogs);
}

async function handleDeleteDog( request, response){
    let id = request.params.id;
    try {
      // deleteOne() returns a string with the message
      // let successMessage = await Dogs.deleteOne({ _id: id });
      
      // findByIdAndDelete() returns the document that was deleted
      let successMessage = await Dogs.findByIdAndDelete(id);

      response.json(successMessage);
    }
    catch(error) { 
      response.status(500).json({message: error.message});
    }
}

async function handleCreateDog( request, response ) {
    let dog = request.body;
    try {
      let newDog = await Dogs.create(dog);
      response.json(newDog);
    }
    catch(error) {
      response.status(500).json({message: error.message});
    }
}

async function seedDatabase(request, response) {
    let results = await Dogs.seed();
    response.json({message: results});
}

async function emptyDatabase(request, response) {
    let results = await Dogs.clear();
    response.json({message: results});
}

// Connect to the database and start the server
function startServer() {
    const PORT = process.env.PORT || 3000;
    const DATABASE_URL = process.env.DATABASE_URL;
    mongoose.connect(DATABASE_URL);
    app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); });
}

startServer();