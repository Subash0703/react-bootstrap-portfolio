import React from "react";
import "./Projects.css";
import draw from "./drawing.png";
import joke from "./joke.png";
import movie from "./movie.png";
import textspeech from "./text-speech.png";

const Projects = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-cont pb-5">
            <h1 className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-title pb-5" data-aos="fade-up">
              Projects
            </h1>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-para" data-aos="fade-up">
              Building Tomorrow's Solutions
            </div>
          </div>
          <div className="row py-5">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-main-title" data-aos="fade-up">
              Projects that Speak Volumes
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-main-para" data-aos="fade-up">
              Explore my portfolio to witness firsthand the projects that
              showcase my abilities. From sleek and responsive websites to
              robust web applications, each project reflects my commitment to
              excellence.
            </div>
          </div>
          <div className="row py-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5">
              <h3 className="h3 pb-2 pro-sub-title" data-aos="fade-up">Drawing Web App</h3>
              <img
                src={draw}
                alt="drawing-web-app"
                className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                data-aos="zoom-in"
              />
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    Developed an interactive Drawing Web App using HTML5, CSS3,
                    Javascript
                  </li>
                  <li>
                    Designed an responsive user interface, incorporating
                    features such as Canvas drawing, Color options to enhance
                    the user experience
                  </li>
                  <li>
                    Implemented performance optimization techniques to ensure
                    that delivers a high quality drawing experience.
                  </li>
                </ul>
              </span>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3 className="h3 pb-2 pro-sub-title" data-aos="fade-up">Random Joke Generator</h3>
              <img
                src={joke}
                alt="joke-app"
                className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                data-aos="zoom-in"
              />
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    Developed a Random Joke Generator web application using
                    HTML, CSS, and JavaScript, showcasing proficiency in
                    development for an engaging and interactive user experiences
                  </li>
                  <li>
                    Successfully integrated a JavaScript API to dynamically
                    fetch and display random jokes, demonstrating the ability to
                    work with external data sources and enhance application
                    functionality.
                  </li>
                  <li>
                    Implemented robust error-handling mechanisms to ensure
                    smooth application performance and a seamless user
                    experience, highlighting problem-solving skills and
                    attention to detail in coding.
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5" >
              <h3 className="h3 pb-2 pro-sub-title" data-aos="fade-up">Movie Rating Web App</h3>
              <img
                src={movie}
                alt="joke-app"
                className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                data-aos="zoom-in"
              />
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    Designed and implemented a Movie Rating and Overview Web App
                    using HTML, CSS, and JavaScript, showcasing strong front-end
                    development skills to create an intuitive and visually
                    appealing user interface.
                  </li>
                  <li>
                    Successfully integrated a JavaScript API to fetch and
                    display movie details dynamically, emphasizing the ability
                    to work with external APIs and deliver real-time, relevant
                    content for a seamless user experience.
                  </li>
                  <li>
                    Optimized codebase for performance and maintained a
                    well-documented code structure, reflecting a commitment to
                    clean coding practices and making the project easily
                    understandable for future development or collaboration.
                  </li>
                </ul>
              </span>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3 className="h3 pb-2 pro-sub-title" data-aos="fade-up">
                Text to Speech Converter
              </h3>
              <img
                src={textspeech}
                alt="joke-app"
                className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                data-aos="zoom-in"
              />
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    Developed an innovative Text-to-Speech Converter Web App
                    using HTML, CSS, and JavaScript, showcasing creativity and
                    proficiency in web development to address user needs in a
                    unique and functional way.
                  </li>
                  <li>
                    Successfully integrated a Text-to-Speech JavaScript API to
                    enable dynamic conversion of text into spoken language,
                    demonstrating the ability to leverage external technologies
                    for enhanced functionality and user experience.
                  </li>
                  <li>
                    Designed an intuitive and user-friendly interface for the
                    Text-to-Speech Converter, prioritizing ease of use and
                    accessibility to cater to a diverse user base, showcasing a
                    user-centric approach to interface design.
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
