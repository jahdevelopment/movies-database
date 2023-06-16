import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, image, title, rating, name }) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(id)) setValue(true);
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
    <div className="card">
      <div className="card-body col">
        <Link to={`/details/${id}`} className="text-decoration-none text-body">
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            className="card-img-movie"
            alt="..."
          />
          <h5>{title}</h5>
          <h5>{name}</h5>
          <p>{rating}</p>
        </Link>
        <button
          type="button"
          className={`btn btn-outline-light btn-sm ${value ? "active" : ""}`}
          onClick={handleClick}
        >
          {value ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
}

export default Card;
