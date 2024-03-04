import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white p-4 foot-card">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h5 className="h5 site-links">About Subash</h5>
              <p>
                I am currently seeking opportunities to collaborate, learn, and
                contribute to innovative projects. If you're looking for a
                dedicated and skilled developer with a fresh perspective, let's
                connect! Feel free to explore my portfolio, and don't hesitate
                to reach out for a chat.
              </p>
              <p>
                Crafting pixel-perfect experiences and bringing designs to life,
                I turn ideas into interactive and visually stunning realities as
                a passionate Developer.
              </p>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
              <h5 className="h5 site-links">Site Links</h5>
              <ul className="list-unstyled ">
                <li>
                  <Link className="text-decoration-none foot-icon" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none foot-icon" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none foot-icon" to="/skills">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none foot-icon"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none foot-icon"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
              <h5 className="h5 site-links">Let's Connect</h5>
              <address>
                <p>Email: subashrajan2003@gmail.com</p>
                <p>Phone: +91-9047629145</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                    />
                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="ec-mobile-number"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Phone Number"
                    />
                    <small
                      id="ec-mobile-number"
                      className="form-text text-white"
                    >
                      I'll never share your details with anyone else.
                    </small>
                    <div className="col-md-6 col-sm-6">
                      <button type="submit" className="btn btn-warning">
                        Connect
                      </button>
                    </div>
                  </div>
                </form>
              </address>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 social-info" data-aos="fade-up">
              <div className="col-md-6 d-flex justify-content-space-evenly ">
                <Link
                  className="social-icon text-decoration-none foot-icon"
                  target="_blank"
                  to="https://www.linkedin.com/in/subash-s-805626273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  {" "}
                  <FaLinkedin />
                </Link>
                <Link
                  className="social-icon text-decoration-none foot-icon"
                  target="_blank"
                  to="https://github.com/Subash0703"
                >
                  {" "}
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center res-btn" data-aos="fade-up">
              <button className="btn btn-secondary "><Link
                to="https://drive.google.com/file/d/1GyzcOywPkcGuR-f9FxDqgXYD7VluN6mw/view?usp=sharing"
                target="_blank"
                className="text-decoration-none res-foot-icon"
              >"Click to Know Me Professionally"</Link>
              </button>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <Link
                className="text-decoration-none d-flex justify-content-center align-items-center foot-copy"
                to="/"
              >
                {" "}
                <FaCopyright /> Copyright Subash 2024
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
