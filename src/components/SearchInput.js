import { useState } from "react";
import { useNavigate } from "react-router";

function SearchInput({title}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Movie title"
          aria-label="Movie title"
          aria-describedby="button-addon2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-outline-light" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
