import React from 'react';
import classes from './Skill.module.scss';


const Skill = (props) => {

    return (
        <div className={classes.shieldPres}>
            <div className={classes.shield}>
                <div className={classes.front}>
                    <img src={require('../../assets/images/languageLogo/' + props.logoImg)} alt="Avatar" />
                </div>
                <div className={classes.back}>
                    <p>{props.info}</p>
                </div>
                <div className={classes.triangle}></div>
            </div>
        </div>
    );
}

export default Skill;