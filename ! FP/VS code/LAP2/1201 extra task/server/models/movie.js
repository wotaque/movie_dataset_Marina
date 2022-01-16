// const moviesData = require("../data");
const db = require('../dbConfig/init');
// const SQL = require('sql-template-strings');
// const { movie } = require('../controllers/movies');


class Movie {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.year = data.year
    }; 

    // DONE api - db
    static get all(){ 
        return new Promise (async(resolve, reject) => {
            try {
                let result = await db.query('SELECT * FROM movies;');
                let movies = result.rows.map(r => new Movie(r));
                resolve(movies);
            } catch (err) {
                reject("Error retrieving movies");
            }
        });
    }; 

    // DONE api - db
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let movieData = await db.query('SELECT * FROM movies WHERE id = $1;', [ id ]);
                let movie = new Movie(movieData.rows[0]);
                resolve(movie);
            } catch (err) {
                reject('Movie not found');
            };
        }); 
    };

    static create(title,name,year){
        return new Promise (async (resolve, reject) => {
            try {
                let movieData = await db.query(`INSERT INTO movies 
                (title, name, year) 
                VALUES ($1,$2,$3) RETURNING *;`, [ title,name,year ]);
                let movie = new Movie(movieData.rows[0]);
                resolve (movie);
            } catch (err) {
                reject('Movie could not be created');
            };
        });
    };

    // api - db
    destroy() {
        return new Promise(async(resolve, reject) => {
            try {
                await db.query(`DELETE FROM movies WHERE id = $1;`, [ this.id ]);
                resolve('Movie was deleted');
            } catch (err) {
                reject('Movie could not be deleted');
            }
        });
    }

}

module.exports = Movie



// class Movie{
//     constructor(data){
//         this.id = data.id;
//         this.title = data.title;
//         this.name = data.name;
//         this.yearOfProduction = data.year_of_production;
//     };
//     static get all(){
//         const movies = moviesData.map((movie) => new Movie(movie));
//         return movies;
//     }; 

    
//     static findById(id){
//         const movieData = moviesData.filter((movie) => movie.id === id)[0];
//         const movie = new Movie(movieData);
//         return movie;
//     };
    
// };
// module.exports = Movie;