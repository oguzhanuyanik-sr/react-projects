import { useEffect, useState } from 'react';
import SearchCard from '../components/SearchCard';
import banner from '../assets/images/banner.jpg';

const Add = () => {
  const [query, setQuery] = useState('A');
  const [results, setResults] = useState([]);

  useEffect(() => {
    setQuery(query);

    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <img src={banner} alt='Movie App Banner' />
          <div className='titles'>
            <h1>Welcome.</h1>
            <h2>Discover thousands of movies, series and documentaries.</h2>
          </div>
          <div className='input-wrapper'>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type='text'
              placeholder='Film, dizi, belgesel ara...'
            />
          </div>
          <ul className='results'>
            {results.map((movie, i) => {
              return (
                <li key={i}>
                  <SearchCard movie={movie} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
