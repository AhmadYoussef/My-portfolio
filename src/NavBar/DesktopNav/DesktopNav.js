import React from 'react';
import classes from './DesktopNav.module.scss';


const DesktopNav = () => {
    return (
        <>
            <div className={classes.logo}>
                <div style={{ backgroundColor: "#333333" }}>
                    <img src={require("../../assets/images/logo.png")} alt="" />
                </div>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li>Home</li>
                    <li></li>
                    <li>About Me</li>
                </ul>
                <ul>
                    <li>Project</li>
                    <li></li>
                    <li>Content</li>
                </ul>
            </div>
        </>
    );
}

export default DesktopNav;