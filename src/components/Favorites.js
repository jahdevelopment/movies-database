import Header from "./Header";


function Favorites() {
  return (
    <>
      <Header />
      <div className="container text-center">
      <h1 className="favorite-title">List of favorites</h1>
        <div className="row row-cols-4 justify-content-center">
          <div className="card">
            <div className="card-body col">
              <img src="..." className="card-img-movie" alt="..." />
              <h4>Title</h4>
              <p>Release Date</p>
              <>Add to favorites</>
            </div>
          </div>
          <div className="card">
            <div className="card-body col">
              <img src="..." className="card-img-movie" alt="..." />
              <h4>Title</h4>
              <p>Release Date</p>
              <>Add to favorites</>
            </div>
          </div>
          <div className="card">
            <div className="card-body col">
              <img src="..." className="card-img-movie" alt="..." />
              <h4>Title</h4>
              <p>Release Date</p>
              <>Add to favorites</>
            </div>
          </div>
          <div className="card">
            <div className="card-body col">
              <img src="..." className="card-img-movie" alt="..." />
              <h4>Title</h4>
              <p>Release Date</p>
              <>Add to favorites</>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
