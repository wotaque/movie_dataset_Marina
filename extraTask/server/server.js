const express = require('express');
const moviesRoutes = require("./controllers/movies");

const server = express();

const cors = require('cors');
server.use(cors());

server.use(express.json());

server.get('/', (req, res) => res.send('Welcome to this empty page!'));
server.use('/movies', moviesRoutes);


module.exports = server;




