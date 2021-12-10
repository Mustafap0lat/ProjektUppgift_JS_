import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { MovieCard } from "./MovieCard";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);


  return (
    <div className="movie-page back-color">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <div className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
           
            
          </div>
        </div>


        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list</h2>
        )}
      </div>
      <footer className="footer1">
        <span className="margin-span"><TwitterIcon /></span>
        <span className="margin-span"><FacebookIcon /></span>
        <span className="margin-span"><InstagramIcon /></span>
        <span><PinterestIcon /></span>
       </footer>
    </div>
  );
};
