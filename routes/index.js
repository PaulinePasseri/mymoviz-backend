var express = require('express');
var router = express.Router();

const APIKEY = process.env.API_KEY

router.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
  .then(response => response.json())
  .then(data => {
    res.json({result: true, movies: data.results})
  })
})

module.exports = router;




