const moviesData = require("../data");

class movie{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
    };
    static get all(){
        const movies = moviesData.map((movie) => new Movie(movie));
        return movies;
    };
    static findById(id){
        const movieData = moviesData.filter((movie) => movie.id === id)[0];
        const movie = new Movie(movieData);
        return movie;
    };
    static add(movie) {
        const newMovieId = moviesData.length + 1;
        const newMovie = new Movie({ id: newMovieId, ...movie });
        moviesData.push(newMovie);
        return newMovie;
    };
    delete() {
        const movie = moviesData.filter((movie) => movie.id === this.id)[0];
        moviesData.splice(nmoviesData.indexOf(movie), 1);
    };
};
module.exports = movie;