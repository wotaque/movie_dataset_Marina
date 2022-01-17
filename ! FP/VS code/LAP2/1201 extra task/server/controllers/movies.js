const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

// routes: get index, get(id) show, post create, delete(id) destroy

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.all;
        res.json(movies);
    } catch (err) {
        res.status(500).send({ err });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).send(err);
    };
});

router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body.title, req.body.name, req.body.year);
        res.status(201).json(movie);
    } catch (err) {
        res.status(422).json({err});
    }
})

// api - db
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        const resp = await movie.destroy();
        res.status(204).json('Movie deleted');
    } catch(err) {
        res.status(500).json({err});
    }
})

module.exports = router