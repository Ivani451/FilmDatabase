import axios from "axios";
import { SAVE_MOVIE, FETCH_MOVIES } from "./types";

export function saveMovie(movie) {
  return {
    type: SAVE_MOVIE,
    payload: movie
  };
}

export function fetchMovies(movie) {
  // A request is made to the 'themoviedb' API using axios
  const API_KEY = "18117ccf1e181391d7676b0195e9c659";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request
  };
}

// file path for images
// https://image.tmdb.org/t/p/w500
