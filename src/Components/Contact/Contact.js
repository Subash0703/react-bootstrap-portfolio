import React from "react";
import "./Contact.css";
import contactimg from "./contimg.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="cont-det row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
            <h1
              className="h1 cont-det-head col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
            >
              Contact
            </h1>
            <div
              className="cont-det-title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
            >
              GET IN TOUCH
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cont-info col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5 p-5">
            <h3 className="cont-head-info" data-aos="fade-up">
              Contact Form
            </h3>
            <p className="p cont-para-info" data-aos="fade-up">
              If you have any inquiries or would like to discuss potential
              collaborations, please feel free to reach out by filling out the
              form below. I appreciate your time and interest.
            </p>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5 p-5">
            <div className="cont-form" data-aos="fade-up">
              <form className="form">
                <div className="form-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="name">Name : </label>
                  <input
                    type="text"
                    className="form-control p-3"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    className="form-control p-3"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="message">Message : </label>
                  <textarea
                    className="form-control p-2"
                    id="message"
                    rows="4"
                    placeholder="Enter Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="row ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5 cont-img-temp">
              <img
                src={contactimg}
                alt="Contact-img"
                data-aos="zoom-out"
                className="cont-img col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5 ">
              <div className="social-info" data-aos="fade-up">
                CONNECT ON SOCIAL
                <br />
                <div className="social-info-name">
                  <Link
                    data-aos="zoom-out"
                    data-aos-duration="3000"
                    className="social-info-icon text-decoration-none"
                    target="_blank"
                    to="https://www.linkedin.com/in/subash-s-805626273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    {" "}
                    <FaLinkedin />
                  </Link>
                  <Link
                    data-aos="zoom-out"
                    data-aos-duration="3000"
                    className="social-info-icon text-decoration-none"
                    target="_blank"
                    to="https://github.com/Subash0703"
                  >
                    {" "}
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
              <h3 className="cont-social-head" data-aos="fade-up">Email : </h3>
              <p className="mb-5 cont-social-para" data-aos="fade-down">Subashrajan2003@gmail.com</p>
              <h3 className="cont-social-head" data-aos="fade-up">Phone Number : </h3>
              <p className="cont-social-para" data-aos="fade-down">+91-9047629145</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
