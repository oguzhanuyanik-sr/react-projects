export default function reducer(state, action) {
  const actions = {
    ADD_WATCHLIST: {
      watchlist: [...state.watchlist, action.payload],
    },
    REMOVE_WATCHLIST: {
      watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
    },
    MOVE_WATCHLIST: {
      watched: state.watched.filter((movie) => movie.id !== action.payload.id),
      watchlist: [...state.watchlist, action.payload],
    },
    ADD_WATCHED: {
      watchlist: state.watchlist.filter(
        (movie) => movie.id !== action.payload.id
      ),
      watched: [...state.watched, action.payload],
    },
    REMOVE_WATCHED: {
      watched: state.watched.filter((movie) => movie.id !== action.payload),
    },
  };

  return { ...state, ...actions[action.type] };
}
