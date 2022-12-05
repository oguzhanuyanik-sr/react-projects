import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

export const GlobalContext = createContext();

const getStorage = (name) => {
  return JSON.parse(localStorage.getItem(name)) || [];
};

const setStorage = (name, state) => {
  return localStorage.setItem(name, JSON.stringify(state));
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    watchlist: getStorage('watchlist'),
    watched: getStorage('watched'),
  });

  const actions = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  useEffect(() => {
    setStorage('watchlist', state.watchlist);
    setStorage('watched', state.watched);
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        actions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
