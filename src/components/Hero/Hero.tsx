import React from "react";
import "./Hero.css";
import Slideshow from "../Slideshow/Slideshow";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">AI-Driven</span>
            <span className="title-line">Backend Engineer</span>
            <span className="title-line">Cloud Architect</span>
            <span className="title-line">Mentor</span>
          </h1>
          <p className="hero-description">
            Master's in Computer Science with 7+ years of experience designing
            cloud-native systems and ML pipelines.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <Slideshow
            height="350px"
            autoplay={true}
            interval={5000}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
