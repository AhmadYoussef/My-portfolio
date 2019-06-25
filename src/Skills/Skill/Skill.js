import React from 'react';
import classes from './Skill.module.scss';


const Skill = () => {

    return (
        <div className={classes.shieldPres}>
            <div className={classes.shield}>
                <div className={classes.front}>
                    <img src={require('../../assets/images/languageLogo/html5.svg')} alt="Avatar" />
                </div>
                <div className={classes.back}>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
                <div className={classes.triangle}></div>
            </div>
        </div>
    );
}

export default Skill;