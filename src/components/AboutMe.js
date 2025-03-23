import React from 'react';
import './AboutMe.css';

const AboutMe = ({ profilePic, skills, bio }) => {
  return (
    <section className="about-me" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="bio">
          <p>{bio}</p>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>• {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
