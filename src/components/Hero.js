import React from 'react';
import './Hero.css';

const Hero = ({ name, bio }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm {name}</h1>
        <p>{bio}</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
