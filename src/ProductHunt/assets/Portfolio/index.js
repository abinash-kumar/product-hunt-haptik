import React from 'react';
import './index.scss';

const Portfolio = ()=>{
    return(
        <div className="portfolio">
            <div className="portfolio__wrapper">
                <img className="portfolio__wrapper-image" src="https://dl3.pushbulletusercontent.com/ugEXa1r7fxtFwRPD3VJbYU24h6qbHzBS/abinash-lg.jpg" alt='profile_image' />
                <div className="portfolio__wrapper-title">
                    <h4>Abinash Kumar</h4>
                    <p><b>Software Engineer at Symbo.</b></p>
                    <p><small>+917042776072</small></p>
                    <p><small>abinaslv@gmail.com</small></p>
                </div>
            </div>
            <div className="portfolio__activity">
                <div className="portfolio__activity--chip-box">
                    <div className="social-icon facebook" />
                </div>
                <div className="portfolio__activity--chip-box">
                    <div className="social-icon LinkedIn" />
                </div>
                <div className="portfolio__activity--chip-box">
                    <div className="social-icon gitHub" />
                </div>
            </div>
            <div className="skill">
                <h4>Skills used in this project</h4>
                <div className="skill-list">
                    <span className="chips" >redux</span>
                    <span className="chips" >react</span>
                    <span className="chips" >reselect</span>
                    <span className="chips" >scss</span>
                    <span className="chips" >redux-saga</span>
                    <span className="chips" >immutable.js</span>
                    <span className="chips" >gitHub</span>
                    <span className="chips" >Heroku</span>
                    <span className="chips" >Responsive Design</span>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Portfolio;