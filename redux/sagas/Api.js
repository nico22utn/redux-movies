const url = "http://localhost:8080/movies"
const urlMovies = `${url}/list`;
const urlPostMovies = `${url}/add`;
const urlPUTMovies = `${url}/edit`;
const urlDELETEMovies = `${url}/delete`;

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
            name: updatedMovie.name,
            releaseYear: updatedMovie.releaseYear
        })
    });
    return yield (response.status === 200);
}
function* deletedItemFromApi(deletedMovieId){
    const response = yield fetch(urlDELETEMovies,{
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
    return yield (response.status === 200);
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updatedMovieFromApi,
    deletedItemFromApi
}