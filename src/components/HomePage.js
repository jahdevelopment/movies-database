import { useState, useEffect } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Catalogue from "./Catalogue";
import axios from "axios";

const apiKey = "32fba61adda7634622096950aa45f404";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("Most Popular");
  const [query, setQuery] = useState("popular");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${query}`,
          {
            params: {
              api_key: apiKey,
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Header />
      <div className="container">
        <SearchInput
        title="Search for a Movie"
        movie="movie"
        />
        <div className="col sort m-4 p-4">
          <h2>Or Sort by:</h2>
          <button
            type="button"
            className="btn btn-outline-light sort"
            onClick={() => {
              setSort("Most Popular");
              setQuery("popular");
            }}
          >
            Popular
          </button>
          <button
            type="button"
            className="btn btn-outline-info sort"
            onClick={() => {
              setSort("Upcoming");
              setQuery("upcoming");
            }}
          >
            Upcoming
          </button>
          <Catalogue pageTitle={sort} movies={movies} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
