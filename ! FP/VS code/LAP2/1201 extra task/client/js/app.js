const form = document.querySelector('#new_movie');
const moviesList = document.querySelector('table');

form.addEventListener('submit', submitMovie);

getAllMovies();

function getAllMovies(){
    fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(appendMovies)
        .catch(console.warn)
};

function submitMovie(e){
    e.preventDefault();

    const movieData = {
        title: e.target.title.value,
        name: e.target.name.value,
        year: e.target.year.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(movieData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/movies', options)
        .then(r => r.json())
        .then(appendMovie)
        .then(() => e.target.reset())
        .catch(console.warn)
};

function appendMovies(data){
    data.forEach(appendMovie);
};

function appendMovie(movieData){
    const newRow = document.createElement('tr');
    const movieLi = formatMovieTr(movieData, newRow);
    moviesList.append(newRow);
};

function formatMovieTr(movie, tr){
    const titleTd = document.createElement('td');
    const nameTd = document.createElement('td');
    const yearTd = document.createElement('td');

    titleTd.textContent = movie.title
    nameTd.textContent = movie.name
    yearTd.textContent = movie.year

    tr.append(titleTd)
    tr.append(nameTd)
    tr.append(yearTd)

    return tr
}
