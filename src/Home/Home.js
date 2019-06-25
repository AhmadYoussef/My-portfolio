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
                    <div>
                        <img src="" alt="k" />
                        <img src="" alt="k" />
                        <img src="" alt="l" />
                        <img src="" alt="s" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;