import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//inital state
const initialState = {
  //När sidan laddas vill jag att min initial state ska hämta datan
  //jag sparat i localstorage
  //konverterar om stringen från localStorage så att arrayn ska fungera.
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],

  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],


};

// if(localStorage.getItem("watched") && localStorage.getItem("watchlist") > 10 ){
//   alert("hej")

// }

//Create context

//Skickar in initialState
export const GlobalContext = createContext(initialState);

//Provide components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //useEffect blir triggad när vår state ändras, tex när vi lägger till en film.
  //När den blir triggad så sparas det i local storage
  //local storage tar string därav konverterar jag arrayn med JSON.stringfy
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    //Gör så att den får tillgång till watchlist och watched från store.
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchList,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
