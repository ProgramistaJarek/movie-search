import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function Discover() {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("popularity.desc");

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const searchMovies = async (e) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1&primary_release_year=2022&with_watch_monetization_types=flatrate`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log("dupa");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ul className="text-white">
        <li onClick={() => setSort("vote_average.asc")}>vote small</li>
        <li onClick={() => setSort("vote_average.desc")}>vote up</li>
        <li onClick={() => setSort("release_date.asc")}>release date small</li>
        <li onClick={() => setSort("release_date.desc")}>release date up</li>
        <li onClick={() => setSort("popularity.desc")}>popularity up</li>
      </ul>
      <div className="card">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </div>
    </>
  );
}

export default Discover;
