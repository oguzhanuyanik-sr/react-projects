import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const ResultCart = ({ movie }) => {
  const { watchlist, watched, actions } = useContext(GlobalContext);

  const isDisabled = (storeds) => {
    return storeds.find((stored) => stored.id === movie.id);
  };

  const imgUrl = 'https://image.tmdb.org/t/p/w200/';

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path && (
          <img src={imgUrl + movie.poster_path} alt={movie.title} />
        )}

        {!movie.poster_path && <div className='filler-poster'></div>}
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
          <h4 className='release-date'>
            IMDB: <b>{movie.vote_average ? movie.vote_average : '-'}</b>
          </h4>

          <div className='controls'>
            <button
              disabled={isDisabled(watched) || isDisabled(watchlist)}
              onClick={() => actions('ADD_WATCHLIST', movie)}
              className='btn'
            >
              Add to Watchlist
            </button>
            <button
              disabled={isDisabled(watched)}
              onClick={() => actions('ADD_WATCHED', movie)}
              className='btn'
            >
              Add to Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
