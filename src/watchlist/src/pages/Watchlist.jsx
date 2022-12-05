import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>Watch list</h1>
          <div className='count-pill'>
            {watchlist.length} {watchlist.length < 2 ? 'Movie' : 'Movies'}
          </div>
        </div>

        {watchlist.length > 0 && (
          <div className='movie-grid'>
            {watchlist.map((movie, i) => (
              <MovieCard key={i} movie={movie} type='watchlist' />
            ))}
          </div>
        )}

        {!watchlist.length && (
          <h2 className='no-movies'>No movies on your list...</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
