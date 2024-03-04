import React from "react";
import "./Skills.css";
import html from "./html-5.png";
import css from "./css-3.png";
import js from "./js.png";
import react from "./science.png";
import bootstrap from "./bootstrap.png";
import python from "./python.png";
import django from "./django.png";
import oracle from "./oracle.png";

const Skills = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="skill-data row">
          <div
            className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5"
            data-aos="fade-up"
          >
            <h1 className="h1 skill-data-head col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              Skills
            </h1>
          </div>
          <div
            className="skill-data-title col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5"
            data-aos="fade-up"
          >
            Full-Stack Fusion
          </div>
        </div>
        <div className="row mx-5 my-5">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="skill-det" data-aos="fade-up">
              <h3 className="h3 skill-det-head">Full-Stack Developer</h3>
            </div>
          </div>
          <div
            className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 my-5"
            data-aos="fade-up"
          >
            <div className="skill-det-cont">
              <p className="p skill-det-para">
                "Passionate and detail-oriented full-stack developer with a
                versatile skill set encompassing HTML, CSS, and JavaScript for
                crafting seamless user interfaces, coupled with proficiency in
                React.js for dynamic client-side interactions. Equipped with
                back-end expertise in Python, Django, and Oracle, I bring a
                holistic approach to building robust, scalable, and data-driven
                web applications. A commitment to clean code and innovative
                problem-solving defines my journey in transforming concepts into
                impactful digital experiences."
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="skill-set my-5" data-aos="fade-up">
                <h3 className="h3 skill-set-head-title">Technical Skills</h3>
              </div>
              <div className="row my-3">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-left">
                  <img src={html} alt="html" className="skill-set-img" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-right" data-aos-delay="300">
                  <img src={css} alt="css" className="skill-set-img" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-left" data-aos-delay="400">
                  <img
                    src={bootstrap}
                    alt="bootstrap"
                    className="skill-set-img"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-right" data-aos-delay="500">
                  <img src={js} alt="js" className="skill-set-img" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-left" data-aos-delay="600">
                  <img src={react} alt="react" className="skill-set-img" />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-right" data-aos-delay="700">
                  <img src={python} alt="python" className="skill-set-img" />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-left" data-aos-delay="800">
                  <img src={django} alt="django" className="skill-set-img" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 d-flex justify-content-center align-items-center my-3" data-aos="flip-right" data-aos-delay="900">
                  <img src={oracle} alt="oracle" className="skill-set-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-3">
              <h3 className="h3 skill-course-head">Internship</h3>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-5 skill-course-cont">
              I have completed an internship in Web Designing at DLK
              Technologies, Chennai, from July 12, 2022, to August 12, 2022.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-3">
              <h3 className="h3 skill-course-head">Course</h3>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-5 skill-course-cont">
              I have completed a Python Full-Stack course at Greens Technologys,
              Chennai, from June 2023 to January 2024.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
