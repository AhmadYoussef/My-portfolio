import React from 'react';
import classes from "./About.module.scss";

const About = () => {
    return (
        <div id="about" className={classes.about}>
            <h2>About Me</h2>
            <div className={classes.aboutContainer}>
                <p>
                    Hello, <br />
                    i am Ahmad Youssef. I am currently training as a front-end developer at the DCI Digital Career Institute in Dusseldorf. I studied telecommunications in Syria and came to Germany in 2016. Since I have a great passion for programming, I wanted to evolve in this area. During this course, I did several projects for friends and clients.
                </p>
                <div className={classes.divider}></div>
                <div className={classes.aboutImage}>
                    <img src={require('../assets/images/profilePicture.jpg')} alt="Profile" />
                </div>
            </div>
        </div>

    );
}

export default About;