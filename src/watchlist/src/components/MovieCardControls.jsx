import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from 'react-icons/ai';

const MovieControls = ({ movie, type }) => {
  const { actions } = useContext(GlobalContext);

  const cardList = [
    {
      type: 'watchlist',
      action1: 'ADD_WATCHED',
      payload1: movie,
      action2: 'REMOVE_WATCHLIST',
      payload2: movie.id,
    },
    {
      type: 'watched',
      action1: 'MOVE_WATCHLIST',
      payload1: movie,
      action2: 'REMOVE_WATCHED',
      payload2: movie.id,
    },
  ].filter((page) => page.type === type);

  return (
    <div className='inner-card-controls'>
      {cardList.map((card, i) => {
        return (
          <div className='controls-wrapper' key={i}>
            <button
              onClick={() => actions(card.action1, card.payload1)}
              className='ctrl-btn'
            >
              {card.type === 'watchlist' && <AiFillEye />}
              {card.type === 'watched' && <AiFillEyeInvisible />}
            </button>
            <button className='ctrl-btn'>
              <AiOutlineClose
                onClick={() => actions(card.action2, card.payload2)}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieControls;
