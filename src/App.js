import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import TvShows from "./components/TvShows";
import Results from "./components/Results";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/my-favorites" element={<Favorites />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/search" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
