import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary-bg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <FaFilm />
          <h4>Movies Database</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav justify-content-center">
            <Link
              to="/tv-shows"
              className="nav-link btn btn-outline-dark me-2"
            >
              Tv Shows
            </Link>
            <Link
              type="button"
              to="/my-favorites"
              className="nav-link btn btn-outline-light me-2"
            >
              My Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
