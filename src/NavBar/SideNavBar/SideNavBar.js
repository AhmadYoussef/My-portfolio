import React from 'react';
import classes from './SideNavBar.module.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { Link } from 'react-router-dom';

class SideNavBar extends React.Component {
    state = {
        isNavShow: false
    }
    showingNav = () => {
        this.setState({ isNavShow: true });
    }
    hidingNav = () => {
        this.setState({ isNavShow: false });
    }
    scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    render() {
        let sideBar = classes.sideNavBar;
        let background = classes.sideBarCloser;
        if (this.state.isNavShow) {
            sideBar += " " + classes.open;
            background += " " + classes.open;
        }
        return (
            <>
                <div className={classes.mobNav}>
                    <NavLink smooth to="/#home" onClick={this.hidingNav}>
                        <div className={classes.logo}>
                            <img src={require('../../assets/images/logo.png')} alt="Logo" />
                        </div>
                    </NavLink>
                    <div className={classes.btnLang}>
                        <div className={classes.languageSite}><Link to="/en">EN </Link><span>|</span><Link to="/de"> DE</Link></div>
                        <button className={classes.hamburger} onClick={this.showingNav}>
                            <img src={require('./hamburgerBtn.svg')} alt="Hamburger Button" />
                        </button>
                    </div>
                </div>
                <div className={sideBar}>
                    <ul >
                        <NavLink smooth to="#home" onClick={this.hidingNav}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="#about"
                            scroll={el => this.scroll(el)}
                            onClick={this.hidingNav}>
                            <li>About Me</li>
                        </NavLink>
                        <NavLink to="#project"
                            scroll={el => this.scroll(el)}
                            onClick={this.hidingNav}>
                            <li>Project</li>
                        </NavLink>
                        <NavLink to="#contact"
                            scroll={el => this.scroll(el)}
                            onClick={this.hidingNav}>
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    <button className={classes.hamburger} onClick={this.hidingNav}>
                        <img src={require('./closeBtn.svg')} alt="Hamburger Button" />
                    </button>
                </div>
                <div className={background} onClick={this.hidingNav} />
            </>
        );
    }
}

export default SideNavBar;