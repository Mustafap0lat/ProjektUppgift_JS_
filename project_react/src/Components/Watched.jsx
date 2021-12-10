import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import { MovieCard } from './MovieCard'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';



export const Watched = () => {
    const{watched} = useContext(GlobalContext);
    if (watched.length > 10){
      <link href="/pricing" />
    }
    return (
        <div className="movie-page back-color">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched Movies</h1>
            <div className ="count-pill">
         {watched.length} {watched.length === 1 ? "Movie" : "Movies" }
       </div>
          
          </div>
  
          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <MovieCard movie={movie} type="watched" />
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
    )
}

