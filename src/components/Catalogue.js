import Card from "./Card";

function Catalogue({ pageTitle, movies }) {
  return (
    <>
      <h1 className="list-title">{pageTitle}</h1>
      <div className="row row-cols-4 justify-content-center">
        {movies.length
          ? movies.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                name={movie.name}
                rating={movie.vote_average}
                image={movie.poster_path}
              />
            ))
          : ""}
      </div>
    </>
  );
}

export default Catalogue;
