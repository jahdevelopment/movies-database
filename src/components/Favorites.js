import Header from "./Header";
import Catalogue from "./Catalogue";

function Favorites({movies}) {
  return (
    <>
    <Header />
  <div className="container text-center">
    <Catalogue 
      pageTitle="My Favorites"
      movies={movies}
    /> 
  </div>
</>
  )
}

export default Favorites
