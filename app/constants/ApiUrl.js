import { API_ROOT_URL,API_ASSETS_URL,API_USER_URL } from './service-info';

//HEADERS
export const API_GENERAL_HEADERS = {"Content-Type": "application/json"};

// API URL
export const API_IMG_URL = API_ASSETS_URL;
export const API_ALLMOVIES = API_ROOT_URL;
export const API_SHOWTIMES_CINEMA_MOVIE = (cinemaId,movieId) => API_ROOT_URL +"showtime/"+ cinemaId +"/"+ movieId;
export const API_MOVIE_DETAIL = (movieId) => API_ROOT_URL +"movie/"+ movieId;
export const API_ALL_CINEMA_SHOW_A_MOVIE = (movieId) => API_ROOT_URL +"movie/cinema/"+ movieId;
export const API_ALL_SANSE_OF_A_MOVIE_IN_A_CINEMA = (cinemaId,movieId) => API_ROOT_URL +"showtime/"+cinemaId+"/"+ movieId;

export const API_SIGNIN_USER = () => API_USER_URL +"login";
export const API_USER_SIGNUP = () => API_USER_URL +"signup";
export const API_USER_AUTH_CHECK = () => API_ROOT_URL +"auth/user";