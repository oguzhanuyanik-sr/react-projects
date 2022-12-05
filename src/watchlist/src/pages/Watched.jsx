import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import MovieCard from '../components/MovieCard';

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>Watched</h1>
          <div className='count-pill'>
            {watched.length} {watched.length < 2 ? 'Movie' : 'Movies'}
          </div>
        </div>
        {watched.length > 0 && (
          <div className='movie-grid'>
            {watched.map((movie, i) => (
              <MovieCard key={i} movie={movie} type='watched' />
            ))}
          </div>
        )}
        {!watched.length && (
          <h2 className='no-movies'>No movies on your list...</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
