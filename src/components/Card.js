import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, image, title, rating }) {
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
        <Link to={`/details/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            className="card-img-movie"
            alt="..."
          />
          <h6 className="show-title">{title}</h6>
          <p>{rating}</p>
        </Link>
        <button
          type="button"
          className={`btn btn-outline-light btn-sm ${value ? "active" : ""}`}
          onClick={handleClick}
        >
          {value ? "Add to favorites" : "Remove from favorites"}
        </button>
      </div>
    </div>
  );
}

export default Card;
