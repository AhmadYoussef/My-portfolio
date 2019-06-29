import React from 'react';
import classes from './ProjectList.module.scss';
import Project from './Project/Project';
import { projects } from '../assets/data/Data';

const ProjectList = () => {
    return (
        <div id="project" className={classes.projectList}>
            <h2>Projects</h2>
            <div className={classes.projectContainer}>
                {
                    projects.map(item => <Project key={item.id} {...item} />)
                }
            </div>
        </div>
    );
}

export default ProjectList;