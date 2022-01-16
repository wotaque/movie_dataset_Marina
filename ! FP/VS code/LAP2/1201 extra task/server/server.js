const express = require('express'); 
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());

const movieRoutes = require("./controllers/movies");

server.use('/movies', movieRoutes);

server.get('/', (req, res) => res.send('Welcome to this empty page!'));

module.exports = server; 