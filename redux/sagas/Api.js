const urlMovies = "http:urlConAlgunGET";

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
export const Api = {
    getMoviesFromApi
}