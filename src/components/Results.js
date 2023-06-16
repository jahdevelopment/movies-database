import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Catalogue from "./Catalogue";
import axios from "axios";

const apiKey = "32fba61adda7634622096950aa45f404";

function Results() {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);

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
        setSearchResults(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <>
      <Header />
      {searchResults.length > 0 ? (
        <Catalogue pageTitle="Results" movies={searchResults} />
      ) 
      : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <h2>Not found, try again!!</h2>
        </div>)}
    </>
  );
}

export default Results;
