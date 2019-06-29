import React from 'react';
import classes from './DesktopNav.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DesktopNav = () => {
    return (
        <>
            <div id="#root" className={classes.logo}>
                <AnchorLink href="#home"><div style={{ backgroundColor: "#333333" }}>
                    <img src={require("../../assets/images/logo.png")} alt="" />
                </div></AnchorLink>
            </div>
            <div className={classes.nav}>
                <ul>
                    <AnchorLink href="#root"><li>Home</li></AnchorLink>
                    <li></li>
                    <AnchorLink offset='70' href="#about"><li>About Me</li></AnchorLink>
                </ul>
                <ul>
                    <AnchorLink offset='70' href="#project"><li>Project</li></AnchorLink>
                    <li></li>
                    <AnchorLink offset='70' href="#contact"><li>Content</li></AnchorLink>
                </ul>
            </div>
        </>
    );
}

export default DesktopNav;