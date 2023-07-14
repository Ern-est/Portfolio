import React from 'react';
import './About.css'
import profileImage from '../assets/me.png'; // Import your profile image

const About = () => {
  return (

    <div className="about">
          <div className="split-about">
          {/* Left section */}
          <div className="left-aboutsection">
              {/* content for left section */}
              <div className="about-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
             
             
          </div>

          {/* Right section */}
          <div className="right-aboutsection">
              {/* content for right section */}
              <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hello! I'm Ernest, a freelance developer passionate about creating innovative and user-friendly web and mobile applications. With several years of experience, I specialize in UI/UX design, web development, and mobile app development.
              </p>
              <p>
                I strive to deliver high-quality solutions that meet clients' requirements and exceed their expectations. I love taking on new challenges and continuously expanding my skill set to stay up-to-date with the latest industry trends and technologies.
              </p>
            </div>
          </div>
          </div>
    </div>

  );
}

export default About;




