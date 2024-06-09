import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailIcon from './assets/email.png';
import linkedinIcon from './assets/linkedin.png';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="contact">
      <div data-aos="zoom-in-down">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
      </div>
      <div className="contact-info-upper-container" data-aos="flip-up" data-aos-delay="300">
        <div className="contact-info-container">
          <img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/nilesh-gagiya-9389022a3/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
