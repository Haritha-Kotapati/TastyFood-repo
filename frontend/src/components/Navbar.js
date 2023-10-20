import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

export default function Navbar({user, setUser}) {
  const handleLogout = () => {
    setUser(null);
  } // Set the user state when the user is logged in

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            TastyFoods
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/locations">
                  Our Locations
                </Link>
              </li>

              {user ? (
                <>
                  {/* Display user's name if logged in */}
                  <li className="nav-item">
                    <UserProfile user={user} />
                  </li>
                </>
              ) : (
                <>
                  {/* Display "Login" and "Sign Up" links if not logged in */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/createuser">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
