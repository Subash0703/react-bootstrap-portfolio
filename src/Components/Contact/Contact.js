import React, { useEffect, useState } from "react";
import "./Contact.css";
import contactimg from "./contimg.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import ParticlesComponent from "../particles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setFormSubmitted(false);
      }, 1000);
    }
  }, [formSubmitted]);

  const submitForm = async (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);

    localStorage.setItem(
      "Contact-Form",
      JSON.stringify({ name, email, message })
    );

    try {
      const data = {
        records: [
          {
            fields: {
              Name: name,
              Email: email,
              Message: message,
            },
          },
        ],
      };
      console.log(data, "data");
      const response = await axios.post(
        "https://api.airtable.com/v0/app0WwwNWho7wSOY4/tblaHRGvseV0366Tq",
        data,
        {
          headers: {
            Authorization:
              "Bearer patU5SCtgiOdH0OeQ.ac2fae98e1ddab3a07a865ecc2cf6030b0b2fd665eba2aa794846858081b6802",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, "response");
      console.log("Form submitted successfully:", response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
    <ParticlesComponent />
      <div className="container-fluid">
        <div className="cont-det row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 my-5">
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
              <form className="form" onSubmit={submitForm}>
                <div className="form-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="name">Name : </label>
                  <input
                    type="text"
                    className="form-control p-3"
                    id="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    className="form-control p-3"
                    id="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="message">Message : </label>
                  <textarea
                    className="form-control p-2"
                    id="message"
                    rows="4"
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                >
                  Submit
                </button>
                {formSubmitted && <p>Form Submitted Successfully!</p>}
              </form>
            </div>
          </div>
          <div className="row ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5 cont-img-temp">
              <img
                src={contactimg}
                alt="Contact-img"
                data-aos="zoom-in"
                className="cont-img col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 img-fluid"
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
                    to="https://linkedin.com/in/subash-shenbagarajan"
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
              <h3 className="cont-social-head" data-aos="fade-up">
                Email :{" "}
              </h3>
              <p className="mb-5 cont-social-para" data-aos="fade-down">
                subashrajan2003@gmail.com
              </p>
              <h3 className="cont-social-head" data-aos="fade-up">
                Phone Number :{" "}
              </h3>
              <p className="cont-social-para" data-aos="fade-down">
                +91-9047629145
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
