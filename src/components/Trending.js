import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function Trending() {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("movie");
  const [time, setTime] = useState("week");

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, time]);

  const searchMovies = async (e) => {
    const url = `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ul className="text-white">
        <li onClick={() => setType("movie")}>movie</li>
        <li onClick={() => setType("tv")}>tv</li>
        <li onClick={() => setType("person")}>person</li>
      </ul>

      <ul className="text-white">
        <li onClick={() => setTime("week")}>week</li>
        <li onClick={() => setTime("day")}>day</li>
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

export default Trending;
