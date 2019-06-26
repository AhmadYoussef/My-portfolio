import React from 'react';
import classes from './Project.module.scss';
import Language from './Language';

const Project = () => {
    return (
        <figure className={classes.projectContainer}>
            <div className={classes.imgContainer}>
                <img src={require('../../assets/images/Projects/anzzor/1.png')} alt="" />
            </div>
            <figcaption className={classes.projectInfo}>
                <div className={classes.languages}>
                    <Language language="HTML" />
                    <Language language="HTML" />
                    <Language language="HTML" />
                </div>
                <div className={classes.btnContainer}>
                    <button>Code</button>
                    <button>View</button>
                </div>
            </figcaption>
        </figure>
    );
}

export default Project;