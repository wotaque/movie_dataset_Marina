const express = require('express'); 
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());

// import route
const movieRoutes = require("./controllers/movies");

// route middleware
server.use('/movies', movieRoutes);

// root route
server.get('/', (req, res) => res.send('Welcome to this empty page!'));

module.exports = server; 