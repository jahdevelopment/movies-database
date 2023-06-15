import React from "react";
import Header from "./Header";

function MovieDetails() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Details</h1>
        <img src="..." className="card-img-movie" alt="..." />
        <h2>Title</h2>
        <h3>Overview</h3>
        <p>description</p>
        <p>Release</p>
        <p>Director</p>
      </div>
    </>
  );
}

export default MovieDetails;
