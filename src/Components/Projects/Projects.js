import React from "react";
import "./Projects.css";
import draw from "./drawing-web-app.png";
import joke from "./joke.png";
import movie from "./movie.png";
import textspeech from "./text-speech.png";
import connectr1 from "./connectr1.png";
import connectr2 from "./connectr2.png";
import tododjango from "./Todo-django.png";
import sms from "./sms.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-cont pb-5">
            <h1
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-title pb-5"
              data-aos="fade-up"
            >
              Projects
            </h1>
            <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-para"
              data-aos="fade-up"
            >
              Building Tomorrow's Solutions
            </div>
          </div>
          <div className="row py-5">
            <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-main-title"
              data-aos="fade-up"
            >
              Projects that Speak Volumes
            </div>
          </div>
          <div className="row pb-5">
            <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-main-para"
              data-aos="fade-up"
            >
              Explore my portfolio to witness firsthand the projects that
              showcase my abilities. From sleek and responsive websites to
              robust web applications, each project reflects my commitment to
              excellence.
            </div>
          </div>
          <div className="row py-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5">
              <h3
                className="h3 pb-2 pro-sub-title text-center"
                data-aos="fade-up"
              >
                Drawing Web App
              </h3>
              <div className="project-gallery">
                <img
                  src={draw}
                  alt="drawing-web-app"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://drawing-web-app.web.app/"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
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
              <h3
                className="h3 pb-2 pro-sub-title text-center"
                data-aos="fade-up"
              >
                Random Joke Generator
              </h3>
              <div className="project-gallery">
                <img
                  src={joke}
                  alt="joke-app"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://github.com/Subash0703/Random-Joke-Generator"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
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
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5">
              <h3
                className="h3 pb-2 pro-sub-title text-center"
                data-aos="fade-up"
              >
                Movie Rating Web App
              </h3>
              <div className="project-gallery">
                <img
                  src={movie}
                  alt="joke-app"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://movieapp-e69ce.web.app/"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
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
              <h3
                className="h3 pb-2 pro-sub-title text-center"
                data-aos="fade-up"
              >
                Text to Speech Converter
              </h3>
              <div className="project-gallery">
                <img
                  src={textspeech}
                  alt="joke-app"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://github.com/Subash0703/Text-to-Speech-Javascript"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
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

          <div className="row">
            <h3
              className="h3 mb-4 pro-sub-title text-center"
              data-aos="fade-up"
            >
              Social Media Web App
            </h3>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5">
              <div className="project-gallery">
                <img
                  src={connectr1}
                  alt="connectr-app"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://starchat-in.web.app/"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5">
              <div className="project-gallery">
                <img
                  src={connectr2}
                  alt="connectr-app"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://starchat-in.web.app/"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    The project utilizes React.js, Tailwind CSS, and Ant Design
                    for frontend development, complemented by Firebase
                    Authentication, Storage, Firestore Database, and Hosting for
                    a comprehensive backend infrastructure, ensuring a seamless
                    user experience.
                  </li>
                  <li>
                    Secure sign-up and login with Firebase Authentication, along
                    with photo uploads using Firebase Storage.
                  </li>
                  <li>
                    Users can create accounts and post text statuses, which are
                    securely saved in the Firebase database.
                  </li>
                  <li>
                    Protected routes ensure that only authenticated users can
                    access certain pages and features, enhancing the security
                    and user experience of the platform.
                  </li>
                  <li>
                    Mobile-first responsive design using Tailwind CSS and Ant
                    Design for an intuitive and consistent user experience
                    across all devices.
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3
                className="h3 pb-2 pro-sub-title text-center"
                data-aos="fade-up"
              >
                Todo list - Django
              </h3>
              <div className="project-gallery">
                <img
                  src={tododjango}
                  alt="tododjango"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://github.com/Subash0703/todolist-django"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    Utilization of Python, Django, HTML, and CSS for backend
                    development, frontend design, and server-side rendering,
                    ensuring a cohesive and efficient project structure.
                  </li>
                  <li>
                    Implementation of Django's authentication system for user
                    login, account creation, and logout functionalities,
                    ensuring secure access to the todo list application.
                  </li>
                  <li>
                    Support for multiple user accounts, allowing users to create
                    and manage their individual todo lists with personalized
                    tasks and preferences.
                  </li>
                  <li>
                    Empowerment of users to add and delete tasks seamlessly,
                    enhancing productivity and organization within the todo list
                    application.
                  </li>
                  <li>
                    Utilization of responsive CSS design, ensuring an optimal
                    viewing experience across various devices and screen sizes,
                    promoting accessibility and user satisfaction.
                  </li>
                </ul>
              </span>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h3
                className="h3 pb-2 pro-sub-title text-center"
                data-aos="fade-up"
              >
                School Management System - Django + React
              </h3>
              <div className="project-gallery">
                <img
                  src={sms}
                  alt="tododjango"
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-sub-img"
                  data-aos="zoom-in"
                />
                <div className="project-gallery-links d-flex justify-content-center align-items-center">
                  <Link
                    to="https://github.com/Subash0703/School-management-system-Django-Backend"
                    target="_blank"
                    className="preview-link text-decoration-none"
                  >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <span className="preview-text ms-2 fs-4">
                      Code/Live Preview
                    </span>
                  </Link>
                </div>
              </div>
              <span className="pro-sub-span">
                <ul data-aos="fade-down">
                  <li>
                    Developed a School Management System using ReactJS and
                    Django with full CRUD operations, enhancing data management
                    and user interaction.
                  </li>
                  <li>
                    Utilized Bootstrap for a responsive and user-friendly UI,
                    improving accessibility and user experience.
                  </li>
                  <li>
                    Implemented Django REST Framework to create robust APIs,
                    enabling efficient data exchange between frontend and
                    backend.
                  </li>
                  <li>
                    Integrated Axios for smooth and reliable communication
                    between the frontend and backend, ensuring efficient data
                    flow.
                  </li>
                  <li>
                    Enhanced administrative efficiency by providing a
                    comprehensive solution for managing various school
                    operations, streamlining processes, and improving
                    productivity
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
