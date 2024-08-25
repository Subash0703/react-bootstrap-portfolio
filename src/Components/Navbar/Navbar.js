import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark py-0">
        <div className="container-fluid intro-nav ">
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
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-lg-0 mx-5">
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeNavbar}>
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link" onClick={closeNavbar}>
                  SKILLS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link" onClick={closeNavbar}>
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeNavbar}>
                  CONTACT
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center mx-5">
              <button className="btn btn-warning">
                <Link
                  to="https://drive.google.com/file/d/1rOa-HcDJTPwz2ilUDcn6GG0m_AiGkquE/view?usp=sharing"
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
