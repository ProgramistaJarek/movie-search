function MovieCard({ title, img, release_date, vote_average, overview }) {
  return (
    <div className="card-container">
      <img
        src={`https://image.tmdb.org/t/p/w300/${img}`}
        alt={title + "poster"}
      />
      <div className="card-text">
        <h3>{title}</h3>
        <p>Release date: {release_date}</p>
        <p>Rating: {vote_average}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
