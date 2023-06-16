import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const apiKey = "32fba61adda7634622096950aa45f404";

function SearchInput({ title }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.elements.search.value);
  }; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: apiKey,
              language: "en-US",
              query: searchQuery,
              page: 1,
            },
          }
        );

        console.log(response.data);
        navigate(`/${searchQuery}`)
      } catch (error) {
        console.log(error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  const handleMovieClick = (id) => {
    navigate(`/details/${id}`);
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
          name="search"
        />
        <button className="btn btn-outline-light" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
