import React from 'react';
import classes from './App.module.scss';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import SkillsList from './Skills/SkillsList';
import ProjectList from './ProjectList/ProjectList';

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <Home />
      <About />
      <SkillsList />
      <ProjectList />
    </div>
  );
}

export default App;
