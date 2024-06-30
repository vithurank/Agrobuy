import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Empowering Your Farm, One Tool at a Time</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="hand_icon"/>
                    </div>
                    <p>collection</p>
                    <p>for farmers</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest collection</div>
                    <img src={arrow_icon} alt="arrow_icon"/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="hero_image" height={800}/>
            </div>
        </div>
    );
};


export default Hero;