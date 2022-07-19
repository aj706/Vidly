import http from "./http";
import config from "../config.json";

const port = process.env.PORT || config.port;
const apiEndpoint = config.apiUrl + port + "/api/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getMovies() {
  return http.get(apiEndpoint);
}
export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}
export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
