import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
          <div className="container-fluid">
            <Link className="navbar-brand  text-white" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{backgroundColor: "white"}}></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link  text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/General">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
