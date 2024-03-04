import React from "react";
import "./Header.css";
import myimg from "./photo-bg.png";

const Header = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="intro-cont row">
          <div className="col-xxl-8 col-xl-8 col-lg-6 col-md-6 col-sm-12">
            <div className="intro-desc d-flex justify-content-space-around">
              <h1 className="h1 intro-line" data-aos="fade-right">
                Hello there! I'm Subash, an enthusiastic and versatile developer
                ready to make waves in the tech world. Armed with a robust skill
                set that includes HTML, CSS, JavaScript, React.js, Python,
                Django, Oracle, and Bootstrap, I bring a passion for creating
                seamless, user-centric applications.
              </h1>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-5">
            <div className="media-img ">
              <img
                src={myimg}
                className="media-pic"
                alt="Subash"
                data-aos="zoom-out"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
