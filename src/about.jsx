import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutPic from './assets/about-pic.png';
import educationIcon from './assets/education.png';
import experienceIcon from './assets/experience.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="about" className="ab1">
      <div data-aos="zoom-in-down">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
      </div>
      <div className="section-container">
        <div className="section__pic-container" data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img src={aboutPic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>School</h3>
              <p>12<sup>th</sup><br />SHREE GANESH VIDHYALAY-Dhrol</p>
              <p>10<sup>th</sup><br />EXCELLENT SECONDARY SCHOOL-Jam khambhaliya</p>
            </div>
            <div className="details-container" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src={experienceIcon} alt="Experience icon" className="icon" />
              <h3>College</h3>
              <p>Bachelor of Engineering-GECR<br />graduate in 2025</p>
            </div>
          </div>
          <div className="text-container" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <p>
              "Computer Engineering student at GEC Rajkot, graduating in 2025. Dedicated to leveraging technology for
              real-world solutions. Strong team player with a passion for innovation and problem-solving. Eager to
              contribute to dynamic projects in the field."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
