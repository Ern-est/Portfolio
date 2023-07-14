import React from 'react';
import './Bar.css';
import slackLogo from '../assets/slack.jpg';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/GitHub-logo.png';
import metaLogo from '../assets/meta-logo.png';

function Bar() {
  return (
    <nav className="bar">
      <a href="https://slack.com/Ernest Cheruiyot">
        <img src={slackLogo} alt="Slack" className="logo-img" />
      </a>
      <a href="https://www.linkedin.com">
        <img src={linkedinLogo} alt="LinkedIn" className="logo-img" />
      </a>
      <a href="https://github.com/Ern-est">
        <img src={githubLogo} alt="GitHub" className="logo-img" />
      </a>
      <a href="https://www.meta.com">
        <img src={metaLogo} alt="Meta" className="logo-img" />
      </a>
    </nav>
  );
}

export default Bar;
