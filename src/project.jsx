import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from './assets/project-1.png';
import projectB from './assets/project-1b.png';
import projectC from './assets/project-c.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: "Online food delivery website",
      description: `Experienced web developer proficient in React, HTML, CSS, and JavaScript. Crafted a food
      delivery website using Swiggy's live API for real-time restaurant data integration. Designed
      intuitive interfaces with Tailwind CSS and shimmer(skeleton) UI, prioritizing user experience.
      Ensured secure data transmission with a keen understanding of cross-origin access. Committed
      to staying updated on emerging technologies and contributing to future e-commerce projects,
      particularly in food delivery.`,
      image: project1,
      githubLink: "https://github.com/nilesh-gagiya/food-delivery-website",
      imgAOS: "fade-down-right",
      textAOS: "fade-down-left"
    },
    {
      title: "Pinterest clone",
      description: `Experienced full-stack developer proficient in React, EJS, CSS Bootstrap, and Passport.js for
      authentication. Skilled in building user registration, login functionality, and file upload features
      using Express.js, Node.js, and MongoDB. Implemented secure authentication methods using
      Passport.js. Leveraged UUID for unique identification within the project. Excels in collaborating
      with teams to deliver intuitive and efficient web applications. Passionate about creating
      seamless user experiences and contributing innovative solutions. Eager to apply expertise to
      projects requiring cutting-edge web development technologies.`,
      image: projectB,
      githubLink: "https://github.com/nilesh-gagiya/pinterest-clone",
      imgAOS: "fade-down-left",
      textAOS: "fade-down-right"
    },
    {
      title: "E-commerce",
      description: `"E Bhart" is a simple e-commerce project created with basic technologies like React, JavaScript,
      HTML, and CSS. It's designed to be user-friendly, offering features like product listings, a
      shopping cart, and an easy checkout process. With responsive interfaces, "E Bhart" provides a
      straightforward experience for users. Though it's a basic project, it's a good starting point for
      learning e-commerce website development.`,
      image: projectC,
      githubLink: "https://github.com/nilesh-gagiya",
      imgAOS: "fade-down-right",
      textAOS: "fade-down-left"
    }
  ];

  return (
    <section id="projects">
      <div data-aos="zoom-in-down">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
      </div>

      {projects.map((project, index) => (
        <div className="project" key={index}>
          <p id="pro" className="section__text__p1" data-aos="zoom-in-down"><b>{project.title}</b></p>
          <div className="content">
            <img id="imge" className="image" data-aos={project.imgAOS} data-aos-delay="300" src={project.image} alt={project.title} />
            <div id="tex" className="experience-details-container" data-aos={project.textAOS} data-aos-delay="400">
              <div className="about-containers">
                <div className="details-container">
                  <div className="article-container">
                    <p className="section__text__p1_text-container">
                      {project.description}
                      <br />
                      <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = project.githubLink}>
                        Github
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;