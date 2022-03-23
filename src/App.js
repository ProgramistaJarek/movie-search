import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import SearchMovies from "./components/SearchMovies";
import Discover from "./components/Discover";
import Trending from "./components/Trending";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path="discover" element={<Discover />} />
          <Route path="trending" element={<Trending />} />
          <Route path="/movie-information/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
