import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container intro-nav ">
          <Link
            className="text-decoration-none navbar-brand  h1 intro-logo"
            to="/"
          >
            Subash.
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto  mb-lg-0 py-5 px-5 mx-5">
              <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link">
                  SKILLS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center mx-5 px-5">
              <button className="btn btn-warning">
                <Link
                  to="https://drive.google.com/file/d/1GyzcOywPkcGuR-f9FxDqgXYD7VluN6mw/view?usp=sharing"
                  target="_blank"
                  className="text-decoration-none resume"
                >
                  RESUME
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
