import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "32fba61adda7634622096950aa45f404";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(id)) setValue(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/images`, {
        params: {
          api_key: apiKey,
          language: "en-CA",
        },
      })
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <img src={`https://image.tmdb.org/t/p/original${movie.image}`} className="card-img-movie" alt="..." />
        <h1>{movie.title}</h1>
        <h3>{movie.overview}</h3>
        <p>{movie.description}</p>
        <p>{movie.release}</p>
        <p>{movie.director}</p>
        <button
          type="button"
          className={`btn btn-outline-light btn-sm ${value ? "active" : ""}`}
          onClick={handleClick}
        >
          {value ? "Add to favorites" : "Remove from favorites"}
        </button>
      </div>
    </>
  );
}

export default Details;
