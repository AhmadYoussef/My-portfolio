import React from 'react';
import classes from './ProjectList.module.scss';
import Project from './Project/Project';

const ProjectList = () => {
    return (
        <div className={classes.projectList}>
            <h2>Projects</h2>
            <div className={classes.projectContainer}>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
}

export default ProjectList;