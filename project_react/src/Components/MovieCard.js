import React from "react";
import { MovieControls } from "./MovieControls";

//type för ifall den ska vara i watched eller watchlist
export const MovieCard = ({ movie,type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

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
           
      <MovieControls type={type } movie={movie} />
      
    </div>
  ); //Passar type ovanför för att skilja på watched och watchlist
};
