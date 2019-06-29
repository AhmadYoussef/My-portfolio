import React from 'react';
import classes from './DesktopNav.module.scss';


const DesktopNav = () => {
    return (
        <>
            <div id="#root" className={classes.logo}>
                <a href="#home"><div style={{ backgroundColor: "#333333" }}>
                    <img src={require("../../assets/images/logo.png")} alt="" />
                </div></a>
            </div>
            <div className={classes.nav}>
                <ul>
                    <a href="#root"><li>Home</li></a>
                    <li></li>
                    <a href="#about"><li>About Me</li></a>
                </ul>
                <ul>
                    <a href="#project"><li>Project</li></a>
                    <li></li>
                    <a href="#contact"><li>Content</li></a>
                </ul>
            </div>
        </>
    );
}

export default DesktopNav;