import MovieControls from './MovieCardControls';

const MovieCard = ({ movie, type }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w200/';

  return (
    <div className='movie-card'>
      <div className='overlay'></div>
      {movie.poster_path && (
        <img src={imgUrl + movie.poster_path} alt={movie.title} />
      )}

      {!movie.poster_path && <div className='filler-poster'></div>}

      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
