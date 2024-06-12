import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from './nav';
import Profile from './profile';
import About from './about';
import Experience from './expreri';
import Projects from './project';
import Contact from './contact';

import Footer from './footer';
AOS.init();


function App() {


  return (
    <>
    <Navbar/>
    <Profile/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </>

  )
}

export default App
