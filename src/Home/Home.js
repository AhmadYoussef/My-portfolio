import React from 'react';
import classes from './home.module.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Home = () => {
    const scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    return (
        <div id="home" className={classes.homeBackground}>
            <div className={classes.center}>
                <h2>
                    Hi, <span>I am</span> Ahmad Youssef.</h2>
                <h2> I am a Front-End Develper.</h2>
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
            <NavLink scroll={el => scroll(el)} to="#about" className={classes.scrolly}>
                <div className={classes.dot}></div>
            </NavLink>
        </div>
    );
}

export default Home;