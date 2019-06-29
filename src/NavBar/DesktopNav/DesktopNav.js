import React from 'react';
import classes from './DesktopNav.module.scss';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const DesktopNav = () => {
    const scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    return (
        <>
            <div className={classes.logo}>
                <NavLink to="/#home"
                    smooth>
                    <div style={{ backgroundColor: "#333333" }}>
                        <img src={require("../../assets/images/logo.png")} alt="" />
                    </div>
                </NavLink>
            </div>
            <div className={classes.nav}>
                <ul>
                    <NavLink smooth to="/#home">
                        <li>Home</li>
                    </NavLink>
                    <li></li>
                    <NavLink to="/#about"
                        scroll={el => scroll(el)}>
                        <li>About Me</li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        to="/#project"
                        scroll={el => scroll(el)}
                    ><li>Project</li></NavLink>
                    <li></li>
                    <NavLink to="/#contact"
                        scroll={el => scroll(el)}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
            <div className={classes.languageSite}><Link to="/en">EN </Link><span>|</span><Link to="/de"> DE</Link></div>
        </>
    );
}

export default DesktopNav;