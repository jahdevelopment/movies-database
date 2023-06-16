import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Catalogue from "./Catalogue";
import axios from "axios";

const apiKey = "32fba61adda7634622096950aa45f404";

function Results() {
  const {query} = useParams();
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: apiKey,
              language: "en-US",
              query: query,
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
       } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <Header />
      <Catalogue pageTitle="Results" movies={movies} />
    </>
  );
}

export default Results;
