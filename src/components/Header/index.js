import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Spiandorello Flix
      </Link>
      <Link className="favorites" to="/my-movies">
        My Filmes
      </Link>
    </header>
  );
}

export default Header;
