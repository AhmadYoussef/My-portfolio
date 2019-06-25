import React from 'react';
import classes from './SkillsList.module.scss';
import Skill from './Skill/Skill'


const SkillsList = () => {
    return (
        <div className={classes.SkillsContainer}>
            <h2>Skills</h2>
            <div className={classes.skillsSlider}>
                <Skill />
            </div>
        </div>
    );
}

export default SkillsList;