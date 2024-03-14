import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./movie.css";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "1b9f42640c34fdb63dbdfab9b7f0ce60",
            language: "en-US",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {};
  }, [navigate, id]);

  function saveMovie() {
    const myList = localStorage.getItem("@spiandorelloflix");

    let savedMovies = JSON.parse(myList) || [];

    const hasFilme = savedMovies.some(
      (savedMovies) => savedMovies.id === movie.id
    );

    if (hasFilme) {
      toast.warn("The selected movie is already on your list!");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@spiandorelloflix", JSON.stringify(savedMovies));
    toast.success("Movie saved successfully!");
  }

  if (loading) {
    return (
      <div className="movie-info">
        <h1>Loading movie details...</h1>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />

      <h3>Synopsis</h3>
      <span>{movie.overview}</span>

      <strong>Rating: {movie.vote_average.toFixed(1)} / 10</strong>

      <div className="area-buttons">
        <button onClick={saveMovie}>Save movie</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
          >
            Watch Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Movie;
