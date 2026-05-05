import React from 'react';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ToTop from './components/toTop.jsx';

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ToTop/>
      </div>
  );
}

export default App;