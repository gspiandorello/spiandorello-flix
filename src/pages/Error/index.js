import { Link } from "react-router-dom";
import "./style.css";

function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <Link to="/">See all the movies by clicking here!</Link>
    </div>
  );
}

export default Erro;
