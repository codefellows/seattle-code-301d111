'use strict';

const axios = require('axios');

async function getMovies( req, res ) { 

  // Change this from fake to a real API call with axios
  let fakeMovies = [
    {title: "John is cool"},
    {title: "Cathy is awesome"},
    {title: "Geno is a pain in the butt"}
  ]

  let movies = fakeMovies.map( movie => {
    return new Movie(movie);
  });

  res.json(movies);
}

class Movie {
  constructor(movieData) {
    this.title = movieData.title;
    this.year = movieData.year;
    this.posterImage = movieData.posterImage;
  }
}

module.exports = getMovies;