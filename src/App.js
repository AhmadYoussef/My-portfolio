import React from 'react';
import classes from './App.module.scss';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import SkillsList from './Skills/SkillsList';
import ProjectList from './ProjectList/ProjectList';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <main>
        <Home />
        <About />
        <SkillsList />
        <ProjectList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
