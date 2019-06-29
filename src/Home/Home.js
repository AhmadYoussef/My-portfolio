import React from 'react';
import classes from './home.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
    return (
        <div id="home" className={classes.homeBackground}>
            <div className={classes.center}>
                <h2>
                    Hi, <span>i’m</span> Ahmad Youssef.</h2>
                <h2> I am Front-End Develper.</h2>
                <div className={classes.dowAndLogo}>
                    <p>Feel free to download my CV <span>here:</span> <br />
                        <span>German</span> - <span>English</span>
                    </p>
                    <div className={classes.logos}>
                        <img src={require('../assets/images/svg/xking.svg')} alt="xking" />
                        <img src={require('../assets/images/svg/linkedin.svg')} alt="linkedin" />
                        <img src={require('../assets/images/svg/pen.svg')} alt="pen" />
                        <img src={require('../assets/images/svg/github.svg')} alt="github" />
                    </div>
                </div>
            </div>
            <AnchorLink offset='50' href="#about" className={classes.scrolly}>
                <div className={classes.dot}></div>
            </AnchorLink>
        </div>
    );
}

export default Home;