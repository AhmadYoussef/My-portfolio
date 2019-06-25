import React from 'react';
import DesktopNav from './DesktopNav/DesktopNav';
import withSizes from 'react-sizes'
import classes from "./NavBar.module.scss";
import SideNavBar from './SideNavBar/SideNavBar';


const NavBar = (props) => {
    let mobDesTopggle = <DesktopNav />;
    if (props.isMobile) {
        mobDesTopggle = <SideNavBar />;
    }
    return (
        <nav className={classes.navBar}>
            {mobDesTopggle}
        </nav>
    );
}
const mapSizesToProps = ({ width }) => ({
    isMobile: width < 850,
})
export default withSizes(mapSizesToProps)(NavBar);