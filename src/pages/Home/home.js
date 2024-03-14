import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
import ScrollToTopButton from "../../components/ScrollToTopButton/scrollToTopButton";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "1b9f42640c34fdb63dbdfab9b7f0ce60",
          language: "en-US",
          page: 1,
        },
      });

      setMovies(response.data.results);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading movies...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="movies-list">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/movie/${movie.id}`} className="link">
                See more
              </Link>
            </article>
          );
        })}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
