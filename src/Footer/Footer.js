import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={classes.topFooter}>
                <div className={classes.slideTop}>
                    <img src={require('../assets/images/svg/goTop.svg')} alt="Slide Top" />
                </div>
            </div>
            <div className={classes.middleFooter}>
                <div className={classes.email}>
                    <img src="" alt="s" />
                    <p>Ahmad.k.youssef@gmail.com</p>
                </div>
                <div>
                    <img src="" alt="s" />
                    <img src="" alt="s" />
                    <img src="" alt="s" />
                    <img src="" alt="s" />
                </div>
            </div>
            <div className={classes.bottomFooter}>
                <p><small>Wojokh © 2019</small></p>
            </div>
        </footer>
    );
}

export default Footer;