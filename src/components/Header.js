import {FaFilm} from "react-icons/fa";


function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary-bg">
    <div className="container-fluid">
      <a className="navbar-brand" href="..#">
        <FaFilm/>
        <h4>Movies Database</h4>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav justify-content-center">
          <a className="btn btn-outline-dark me-2" aria-current="page" href="..#">Home</a>
          <a className="btn btn-outline-dark me-2" href="..#">Tv Shows</a>
          <a className="btn btn-outline-dark me-2" href="..#">My Favorites</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;
