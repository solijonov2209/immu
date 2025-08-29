import React from 'react';
import heroImg from '../../../assets/images/hero-img.png';
import rightArrow from '../../../assets/images/Vector-right.svg';
import leftArrow from '../../../assets/images/Vector-left.svg';
import './hero.scss';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <img
            className="hero-img"
            src={heroImg}
            width={1160}
            alt="hero image: Islomiy moliya mutaxasislari uyushmasi"
          />
          <div className="hero-content">
            <h1 className="hero-title">Janubiy Koreyadagi vatandoshlarimiz bilan muloqot</h1>
            <div className="hero-btn-wrapper">
              <Link className="hero-btn">Batafsil</Link>
              <div className="right-btn-wrapper">
                <button className="right-btn">
                  <img src={leftArrow} alt="left arrow button" />
                </button>
                <button className="right-btn">
                  <img src={rightArrow} alt="right arrow button" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
