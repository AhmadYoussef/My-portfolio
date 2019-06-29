import React from 'react';
import classes from './Project.module.scss';
import Language from './Language';

const Project = (props) => {
    return (
        <figure className={classes.projectContainer}>
            <div className={classes.imgContainer}>
                <img src={require('../../assets/images/Projects/' + props.images)} alt="" />
            </div>
            <figcaption className={classes.projectInfo}>
                <div className={classes.languages}>
                    {props.languages.map((item, index) => <Language key={index} language={item} />)}

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