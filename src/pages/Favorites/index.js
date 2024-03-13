import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import trashIcon from "../../assets/trash-icon.svg";
import eyeIcon from "../../assets/eye-icon.svg";
import "./style.css";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@spiandorelloflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let filteredMovies = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(filteredMovies);

    localStorage.setItem("@spiandorelloflix", JSON.stringify(filteredMovies));
    toast.success("Movie deleted with success! 🎉");
  }

  return (
    <div className="my-movies">
      <h1>My Movies</h1>

      {movies.length === 0 && (
        <span>You don't have any movies saved yet :( </span>
      )}

      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div className="div-icons">
                <button className="icons">
                  <Link to={`/movie/${item.id}`} title="View movie details">
                    <img src={eyeIcon} alt="Eye Icon" className="eye-icon" />
                  </Link>
                </button>
                <button className="icons">
                  <img
                    src={trashIcon}
                    alt="Delete Icon"
                    className="delete-icon"
                    onClick={() => deleteMovie(item.id)}
                    title="Delete movie from your list"
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
