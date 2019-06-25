import React from 'react';
import classes from "./About.module.scss";

const About = () => {
    return (
        <div className={classes.about}>
            <h2>About Me</h2>
            <div className={classes.aboutContainer}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vitae laudantium quidem officia fugiat tempore nobis doloribus assumenda dolorum aspernatur fugit veritatis rem expedita cumque, et vero. Facilis, labore laboriosam?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vitae laudantium quidem officia fugiat tempore nobis doloribus assumenda dolorum aspernatur fugit veritatis rem expedita cumque, et vero. Facilis, labore laboriosam?
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