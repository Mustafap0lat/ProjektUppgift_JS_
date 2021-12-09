import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Startup.css";
import { Link } from "react-router-dom";

export default function Startup() {
  return (
    <div className="hero-img">
      
      <h1 className="margin-header">Welcome to Removie</h1>
      <div>
      <h5 className="margin-text">The library for all movie enthustiasts.</h5>
      </div>

      <div className="margin-content">
        <span className="change-content"></span>
        </div>

      <div>
        <button className="hero-btn-L">
          <Link to="/add" className="btn">
            TRY LIMITED FOR FREE
          </Link>
        </button>
        
        <button className="hero-btn-R">
          <Link to="/pricing" className="btn">
            GET STARTED RIGHT NOW
          </Link>
        </button>
      </div>
    </div>
  );
}
