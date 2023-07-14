import React from 'react';
import './About.css';
import profileImage from '../assets/me.png';

const About = () => {
  return (
    <div className="about">
      <h2>About <span>Me</span></h2>
      <div className="split-about">
        {/* Left section */}
        <div className="left-aboutsection">
          {/* Content for left section */}
          <div className="about-grid">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="about-text">
              <p>
                Hello! I'm Ernest, a freelance developer passionate about creating innovative and user-friendly web and mobile applications. With several years of experience, I specialize in UI/UX design, web development, and mobile app development.
              </p>
              <p>
                I strive to deliver high-quality solutions that meet clients' requirements and exceed their expectations. I love taking on new challenges and continuously expanding my skill set to stay up-to-date with the latest industry trends and technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="right-aboutsection">
          {/* Content for right section */}
        </div>
      </div>
    </div>
  );
}

export default About;
