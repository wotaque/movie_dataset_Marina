DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id serial PRIMARY KEY,
    title VARCHAR (100) NOT NULL,
    name VARCHAR (50) NOT NULL,
    year INT 
);
