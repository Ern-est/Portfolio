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
        <img src={slackLogo} alt="Slack" />
      </a>
      <a href="https://www.linkedin.com">
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
      <a href="https://github.com/Ern-est">
        <img src={githubLogo} alt="GitHub" />
      </a>
      <a href="https://www.meta.com">
        <img src={metaLogo} alt="Meta" />
      </a>
    </nav>
  );
}

export default Bar;
