'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const verifyUser = require('./auth/authorize.js');
const Book = require('./models/bookModel');

const app = express();
app.use(cors());
app.use(express.json());

// This will run the verifyUser function on EVERY REQUEST
// So ... if the user is valid (token sent from client), the routes will work.
// Each route will have req.user available so you can reference the user's information

// If the user is not authenticated, then the server will send a "Not Authorized" response
app.use(verifyUser);

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URL)

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);
app.put('/books/:id', handlePutBooks)

async function handleGetBooks(req, res) {

  const searchObject = {}

  try {
    const booksFromDb = await Book.find(searchObject);
    res.status(200).send(booksFromDb);
  } catch (e) {
    console.error(e);
    res.status(500).send('server error');
  }
}


async function handlePostBooks(req, res) {

  const { title, description, status } = req.body;
  try {
    const newBook = await Book.create({ ...req.body })
    res.status(200).send(newBook)
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handleDeleteBooks(req, res) {
  const { id } = req.params;


  try {
    const book = await Book.findOne({ _id: id });
    if (!book) res.status(400).send('unable to delete book');
    else {
      await Book.findByIdAndDelete(id);
      res.status(204).send('bye book');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handlePutBooks(req, res) {
  const { id } = req.params;

  try {
    const book = await Book.findOne({ _id: id });
    if (!book) res.status(400).send('unable to update book');
    else {
      const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body }, { new: true, overwrite: true });
      res.status(200).send(updatedBook);
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
