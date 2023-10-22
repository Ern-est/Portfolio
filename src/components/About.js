import React from 'react';
import Hernest from '../assets/me.png'
import './About.css'

const About = () => {
  return (

    <div className="about">
    <h2 className="about-title">About <span>Me</span></h2>

          <div className="split-about">
          {/* Left section */}
          <div className="left-aboutsection">
              {/* content for left section */}
              <div className='about-card'>
                  <img src={Hernest}  alt='me' className='about-img'/>
              </div>
             
             
          </div>

          {/* Right section */}
          <div className="right-aboutsection">
              {/* content for right section */}
              <div className="about-text">
              <p>
        I am a passionate and versatile developer with a strong foundation in full-stack development, a keen eye for UI/UX design, and experience in mobile app development. My journey in the world of technology has equipped me with the skills and knowledge to bring innovative ideas to life.
      </p>
      <p>
        With a background in full-stack development, I am proficient in both front-end and back-end technologies, allowing me to create seamless and responsive web applications. I take pride in crafting user-centric, visually appealing interfaces that enhance the user experience, making UI/UX design an integral part of my skill set.
      </p>
      <p>
        As a mobile developer, I have experience in building cross-platform applications that run smoothly on both iOS and Android. I enjoy the challenge of optimizing performance and user engagement on mobile devices.
      </p>
      <p>
        My commitment to continuous learning and staying up-to-date with industry trends keeps me excited about tackling new challenges and delivering exceptional results. I am enthusiastic about collaborating with teams and clients to create solutions that make a difference.
      </p>
      <p>
        Let's work together to turn ideas into reality. Feel free to reach out to discuss potential projects or collaborations.
      </p>
              </div>
              
          </div>
          </div>
    </div>

  );
}

export default About;
