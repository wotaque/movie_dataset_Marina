function getAllMovies(){
    fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(appendMovies)
        .catch(console.warn)
};


module.exports = getAllMovies;

