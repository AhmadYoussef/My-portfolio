import React from 'react';
import classes from './home.module.scss';

const Home = () => {
    return (
        <div className={classes.homeBackground}>
            <div className={classes.center}>
                <h2>
                    Hi, <span>I’m</span> Ahmad Youssef.</h2>
                <h2> I am Front-end Develper</h2>
                <div className={classes.dowAndLogo}>
                    <p>Feel free to download my CV <span>Here:</span> <br />
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
        </div>
    );
}

export default Home;