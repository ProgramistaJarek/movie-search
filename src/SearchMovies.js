import { useState } from "react";

function SearchMovies() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };

  const queryMovie = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query">Movie name: </label>
        <input className="form-input" type="text" name="query" placeholder="Search movie..." value={query} onChange={queryMovie} />
        <button className="btn" type="submit">Search</button>
      </form>
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

const MovieCard = ({ title, img, release_date, vote_average, overview }) => {
  return (
    <div className="card-container">
      <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt={title + "poster"} />
      <div className="card-text">
        <h3>{title}</h3>
        <p>Release date: {release_date}</p>
        <p>Rating: {vote_average}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default SearchMovies;
