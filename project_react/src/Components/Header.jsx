import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header>
      <div className="header-adjustment">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Removie</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/pricing">Get Started</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
            <li>
              <Link to="/signin" className="margin-right">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
