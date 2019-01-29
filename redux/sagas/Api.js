const urlMovies = "http:urlConAlgunGET";
const urlPostMovies = "http://URLPOSTMOVIES.com";
const urlPUTMovies = "http://URLPUTMOVIES.com";
function* getMoviesFromApi(){
    const response = yield fetch(urlMovies,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse( response): [];
    return movies;
}
function* insertNewMovieFromApi(newMovie){
    const response = yield fetch(urlPostMovies,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear
        })
    });
    return yield (response.status === 201);
}

function* updatedMovieFromApi(updatedMovie){
    const response = yield fetch(urlPUTMovies,{
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear
        })
    });
    return yield (response.status === 201);
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updatedMovieFromApi
}