import Header from './Header'
import Catalog from './Catalog'

function TvShows() {
  return (
    <>
    <Header />
    <div className="container">
        <h1>Search for a Tv Show</h1>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tv Show title"
              aria-label="Tv Show title"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-light"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>
        <div className="col sort m-4 p-4">
          <h2>Or Sort by:</h2>
          <button type="button" class="btn btn-outline-light sort">
            Popular
          </button>
          <button type="button" class="btn btn-outline-info sort">
            Upcoming
          </button>
        </div>
      </div>
      <div className="container text-center ">
        <Catalog/>
      </div>
    </>
  )
}

export default TvShows;