import { Link } from "react-router-dom";
import "./pageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <Link to="/">See all the movies by clicking here!</Link>
    </div>
  );
}

export default PageNotFound;
