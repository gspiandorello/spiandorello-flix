import axios from "axios";

//Base URL: https://api.themoviedb.org/3/
//API URL: https://api.themoviedb.org/3/movie/now_playing?api_key=1b9f42640c34fdb63dbdfab9b7f0ce60&language=en-US

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
