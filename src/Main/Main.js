import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import SkillsList from '../Skills/SkillsList';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact';

const Main = (props) => {
    console.log(props);
    return (
        <main>
            <Home />
            <About />
            <SkillsList />
            <ProjectList />
            <Contact />
        </main>
    );
}

export default Main