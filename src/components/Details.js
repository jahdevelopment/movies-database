import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(id)) setValue(true);
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=32fba61adda7634622096950aa45f404&language=en-CA`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleClick = (e) => {
    setValue(!value);
    if (!value) {
      localStorage.setItem(id, true);
      window.dispatchEvent(new Event("storage"));
    } else {
      localStorage.removeItem(id);
      window.dispatchEvent(new Event("storage"));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1>Details</h1>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-movie" alt="..." />
        <h1>{movie.original_name}</h1>
        <h3>{movie.overview}</h3>
        <p>description</p>
        <p>Release</p>
        <p>Director</p>
        <button
            className={value ? "remove-to-watchlist" : "add-to-watchlist"}
            onClick={handleClick}
          >
            {value ? "- Remove to watchlist" : "+ Add to watchlist"}
          </button>
      </div>
    </>
  );
}

export default Details;
