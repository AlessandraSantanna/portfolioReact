import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Hero from './components/hero/hero';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import { Experience } from './components/experience/Experience.jsx';

function App() {
  useEffect (() =>{
    AOS.init ({
      duration:1000,
    });

  },[])
  return (
    <main>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact /> 
      <Footer />

    </main>
  );
}

export default App;
