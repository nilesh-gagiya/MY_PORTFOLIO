import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from './assets/profile-pic.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const openResume = () => {
    window.open('/resume-example.pdf');
  };




  const goToContact = () => {
    window.location.href = './#contact';
  };

  const goToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/nilesh-gagiya-9389022a3/';
  };

  const goToGitHub = () => {
    window.location.href = 'https://github.com/nilesh-gagiya';
  };

  return (
    <section id="profile">
      <div className="section__pic-container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <img src={profilePic} alt="profile picture" />
      </div>
      <div className="section__text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <p className="section__text__p1">Hello, I'm</p>



        {/* <h1 className="title">Nilesh Gagiya</h1> */}
        <div class="containersel">
          <p class="typed">Nilesh Gagiya</p>
        </div>






        <p className="section__text__p2">Web Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={goToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img src={linkedinIcon} alt="My LinkedIn profile" className="icon" onClick={goToLinkedIn} />
          <img src={githubIcon} alt="My Github profile" className="icon" onClick={goToGitHub} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
