const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const Movie = require("../models/movies");

router.get("/", (req, res) => {
    const movies = Movie.all;
    res.send(movies);
});

router.get("/:id", (req, res) => {
    try{
        const movieId = parseInt(req.params.id);
        const selectedMovie = Movie.findById(movieId);
        res.send(selectedMovie);
    } catch {
        res.status(404).send("Movie does not exist.");
    }
});
router.post('/', (req, res) => {
    const movie = req.body;
    const newMovie = Movie.add(movie); 
    res.status(201).send(newMovie);
});
router.delete('/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const selectedMovie = Movie.findById(movieId);
    selectedMovie.delete();
    res.status(204).send();
});

module.exports = router;