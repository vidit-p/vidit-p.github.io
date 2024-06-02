import React from 'react';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import './App.css';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
