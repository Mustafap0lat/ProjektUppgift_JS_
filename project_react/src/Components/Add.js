import React, { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
const axios = require("axios").default;


export const Add = () => {
  //Initial state i vår input blir en tom string
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    
    e.preventDefault();
    //Sätter det vi skriver istället för "search for a movie".
    setQuery(e.target.value);
    //Varje gång vi skriver något vill vi fetcha något från api:et
 
    axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=1ebc95fee40b0e10eaafafab48dae03f&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => {
        console.log(res.data);
      
        
        if (!res.data.errors) {
          setResults(res.data.results);
        } else {
          setResults([]);
        }
      });
    };
    


  return (
    <div className="back-color">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie" 
              //Sätter initial value till den tomma strängen vi deklarerat där uppe
              value={query}
              onChange={onChange}
            />
           
          </div>
            
          {results.length > 0 && ( //kollar så att api:et som skickas in i result inte är tomt,
          // sen mappar eller (Foreachar) databasens title och namnger den movie, därav movie.title  
            <ul className ="results">
            {results.map(movie => (

                    //Varje id är uniq därav movie.id som key
              //Som prop skickar jag in hela movie objektet till ResultCard.
              <li key={movie.id}>
                <ResultCard movie={movie}/>
              </li>


            ))}
            </ul>
          )}

        
      </div>
    </div>
    </div>
  );
};
