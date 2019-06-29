import React from 'react';
import classes from './SideNavBar.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
                    <AnchorLink href="#home" onClick={this.hidingNav}><div className={classes.logo}>
                        <img src={require('../../assets/images/logo.png')} alt="Logo" />
                    </div></AnchorLink>
                    <button className={classes.hamburger} onClick={this.showingNav}>
                        <img src={require('./hamburgerBtn.svg')} alt="Hamburger Button" />
                    </button>
                </div>
                <div className={sideBar}>
                    <ul >
                        <AnchorLink href="#home" onClick={this.hidingNav}><li>Home</li></AnchorLink>
                        <AnchorLink offset='50' href="#about" onClick={this.hidingNav}><li>About Me</li></AnchorLink>
                        <AnchorLink offset='50' href="#project" onClick={this.hidingNav}><li>Project</li></AnchorLink>
                        <AnchorLink offset='50' href="#contact" onClick={this.hidingNav}><li>Contact</li></AnchorLink>
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