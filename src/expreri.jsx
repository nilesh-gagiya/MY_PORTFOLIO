import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import checkmarkIcon from './assets/checkmark.png';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const skills = [
    { name: 'Java', level: 'Experienced' },
    { name: 'HTML', level: 'Experienced' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'React', level: 'Experienced' },
    { name: 'CSS', level: 'Basic' },
    { name: 'Tailwindcss', level: 'Basic' },
    { name: 'Bootstrap', level: 'Basic' }
  ];

  return (
    <section id="experience">
      <div data-aos="zoom-in-down">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skill</h1>
      </div>
      <div className="experience-details-container" data-aos="fade-down-left">
        <div className="about-containers">
          <div className="details-container">
            <div className="article-container">
              {skills.slice(0, 4).map((skill, index) => (
                <article key={index}>
                  <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="experience-details-container" data-aos="fade-down-right">
        <div className="about-containers">
          <div className="details-container">
            <div className="article-container">
              {skills.slice(4).map((skill, index) => (
                <article key={index}>
                  <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
