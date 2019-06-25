import React from 'react';
import classes from './SideNavBar.module.scss';

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
                    <div className={classes.logo}>
                        <img src={require('../../assets/images/logo.png')} alt="Logo" />
                    </div>
                    <button className={classes.hamburger} onClick={this.showingNav}>
                        <img src={require('./hamburgerBtn.svg')} alt="Hamburger Button" />
                    </button>
                </div>
                <div className={sideBar}>
                    <ul >
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Project</li>
                        <li>Contact</li>
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