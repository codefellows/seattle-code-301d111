'use strict';

const Dogs = require('./models/dogs');

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

async function handleUpdateDog( request, response ) {
    // Given the ID from the URL parameter and the body of the request,
    // use Mongoose to update the documen in the collection
    // Return the updated document back to the browser in the response

    let id = request.params.id;
    let dogToUpdate = request.body;

    let updatedDog = await Dogs.findByIdAndUpdate(id, dogToUpdate);

    response.json(updatedDog);
}

module.exports = { handleGetDogs, handleDeleteDog, handleCreateDog, handleUpdateDog };