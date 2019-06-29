import React from 'react';
import classes from "./About.module.scss";

const About = () => {
    return (
        <div id="about" className={classes.about}>
            <h2>About Me</h2>
            <div className={classes.aboutContainer}>
                <p>
                    Hello, <br />
                    My name is Ahmad Youssef. I am a fresh Front-End developer. I studied Telecommunication Engineering in Syria, But  I didn't have the chance to work in this field. I started to learn more about Programming because I had a passion for it when I was in university. that is the reason why I decided to be a web developer. At the moment I am attending a Web developer course by DCI Digital Career Institute. During this course, I did several projects for my friends and client.
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