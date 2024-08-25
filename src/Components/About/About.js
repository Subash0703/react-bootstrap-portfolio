import React from "react";
import "./About.css";
// import image1 from "./photo-bg.png";
import image2 from "./linkedin-profile.png";
import ParticlesComponent from "../particles";

const About = () => {
  return (
    <>
    <ParticlesComponent />
      <div className="container-fluid">
        <div className="intro-about row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5">
            <h1
              className="h1 about-head col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 my-5"
              data-aos="fade-up"
            >
              About
            </h1>
            <div
              className="about-head-line col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
            >
              Hi, I'm Subash
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-xxl-6 col-xl-6 col-lg-4 col-md-12 col-sm-12">
            <div className="about-detail">
              <h3 className="h3 about-det-line" data-aos="fade-up">
                Full-Stack Developer
              </h3>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 pb-5">
            <div className="about-det-cont">
              <p className="p about-cont-det" data-aos="fade-up">
                Energetic and detail-oriented Full-Stack Developer with a
                comprehensive skill set encompassing HTML, CSS, JavaScript,
                ReactJS, Python, Django, and Oracle. A recent graduate equipped
                with a strong foundation in both front-end and back-end
                development, dedicated to creating seamless and intuitive web
                applications. Possessing a deep understanding of the software
                development life cycle, I am eager to bring my technical prowess
                and enthusiasm for innovation to a dynamic team.
              </p>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
              <h2
                className="h2 about-skill-short-head-title"
                data-aos="fade-up"
              >
                Tech Stack Mastery
              </h2>
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              HTML, CSS, JAVASCRIPT
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              I thrive in the world of front-end development, turning design
              concepts into interactive and responsive web experiences.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              REACT.JS
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              Building dynamic and modern user interfaces is my forte. I love
              creating React components that not only look great but also
              enhance user interactions.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              PYTHON, DJANGO
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              My back-end skills are powered by Python, and I harness the
              efficiency and scalability of Django to create robust web
              applications.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              ORACLE
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              Proficient in database management with Oracle, I ensure that data
              is not just stored but optimized for seamless application
              performance.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              BOOTSTRAP
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              I believe in the power of rapid development without compromising
              aesthetics. Bootstrap is my go-to framework for crafting visually
              appealing and mobile-friendly websites.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              FIREBASE
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              Leveraging Firebase, I develop real-time applications with
              seamless user authentication, database management, and cloud
              storage solutions.
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-up">
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-head">
              GITHUB, BITBUCKET
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 about-skill-short-para">
              I utilize GitHub and Bitbucket for version control and
              collaboration, efficiently managing code repositories, tracking
              changes, and collaborating with other developers to ensure project
              success and seamless project management.
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 my-5 about-cen-img">
              <img
                className="about-img"
                src={image2}
                alt="aboutimg"
                data-aos="flip-left"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="row pb-5" data-aos="fade-down">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 about-more-title">
              What Sets Me Apart ?
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 about-more-para">
              In addition to my technical skills, what truly defines me is my
              dedication to delivering high-quality solutions. I have a keen eye
              for detail, a passion for problem-solving, and an unwavering
              commitment to staying updated with the latest industry trends.
            </div>
          </div>
          <div className="row">
            <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
            >
              <div
                className="about-values d-flex justify-content-center my-5"
                data-aos="fade-up"
              >
                <h2 className="h2 about-values-title mb-5">
                  My Values & Beliefs
                </h2>
              </div>
              <div className="row pb-5">
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <h5 className="h5 about-values-subtitle">
                    Continuous Learning
                  </h5>
                  <p className="p about-cont-para1">
                    In the ever-evolving tech landscape, I embrace a mindset of
                    perpetual learning. Each project is an opportunity to
                    acquire new skills and refine existing ones, ensuring that
                    my work remains cutting-edge.
                  </p>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <h5 className="h5 about-values-subtitle">
                    User-Centric Approach
                  </h5>
                  <p className="p about-cont-para1">
                    I believe in placing the user at the forefront of every
                    design and development decision. Crafting solutions that not
                    only meet but exceed user expectations is my constant goal.
                  </p>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4"
                  data-aos="fade-up"
                >
                  <h5 className="h5 about-values-subtitle">
                    Passion for Problem-Solving
                  </h5>
                  <p className="p about-cont-para1">
                    Challenges are not roadblocks but stepping stones to
                    innovation. I approach problem-solving with enthusiasm,
                    seeing each hurdle as a chance to showcase creativity and
                    find elegant solutions.
                  </p>
                </div>
              </div>
              <div className="row pb-5">
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <h5 className="h5 about-values-subtitle">
                    Code Elegance and Efficiency
                  </h5>
                  <p className="p about-cont-para1">
                    Writing code is an art form, and I am committed to crafting
                    elegant, efficient, and maintainable solutions. Clean code
                    not only enhances readability but also facilitates seamless
                    collaboration with fellow developers.
                  </p>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <h5 className="h5 about-values-subtitle">Adaptability</h5>
                  <p className="p about-cont-para1">
                    Technology is a dynamic realm, and adaptability is key. I
                    approach new challenges with a flexible mindset, embracing
                    change and leveraging it as an opportunity for growth.
                  </p>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4"
                  data-aos="fade-up"
                >
                  <h5 className="h5 about-values-subtitle">
                    Commitment to Quality
                  </h5>
                  <p className="p about-cont-para1">
                    Quality is non-negotiable. Whether it's a small-scale
                    website or a complex application, I am committed to
                    delivering solutions that not only meet specifications but
                    also exceed expectations in terms of performance, usability,
                    and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
