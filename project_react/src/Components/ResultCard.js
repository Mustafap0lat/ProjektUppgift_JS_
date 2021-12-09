import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

//skickar in movie som prompt så vi kan nå den och all som finns i den.
//movie var är namnet på vår map och innehåller all info från result, alltså apiet.
export const ResultCard = ({ movie }) => {
  //Kan på detta sätt använda min global och knyta den till button.
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

    const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? ( //eftersom jag skickar in hela movie objetet som props så kan movie.poster_path nås.
      
           
             <img 
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            //alt för att den ska returna filmens titel.
            alt={`${movie.title} Poster`}
            />
           
        ) : (
          //Finns det ingen poster så returnas det en blank ruta.
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
