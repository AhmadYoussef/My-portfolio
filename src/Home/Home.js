import React from 'react';
import classes from './home.module.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { langData } from '../assets/data/Data';

const Home = (props) => {
    let content = { ...langData.en };
    if (props.lang === 'de')
        content = { ...langData.de };
    const scroll = (el) => {
        window.scrollTo({ top: el.offsetTop - 50, left: 0, behavior: 'smooth' })
    }
    return (
        <div id="home" className={classes.homeBackground}>
            <div className={classes.center}>
                {content.homeText1()}
                <div className={classes.dowAndLogo}>
                    {content.homeText2()}
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