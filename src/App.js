import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import TvShows from "./components/TvShows";
import Results from "./components/Results";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/my-favorites" element={<Favorites />}/>
          <Route path="/tv-shows" element={<TvShows/>}/>
          <Route path="/search" element={<Results/>}/>
        </Routes>
      </Router>
     </div>
  );
}

export default App;
