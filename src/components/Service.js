import React from 'react';
import './Service.css';
import { FaArrowRight } from 'react-icons/fa';
import Ernest from '../assets/Hernest.png';
import web from '../assets/Webdev.jpg';
import app from '../assets/app.png';

function Service() {
  return (
    <section className="services-section">
      <h1 className="section-title">Services</h1>
      <div className="service-card">
        <div className="card-content">
          <h2>UI/UX Design</h2>
          <img src={Ernest} alt="" className="card-image" />
          <a href="/projects/ui-ux" className="card-link">
            Show More <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="service-card">
        <div className="card-content">
          <h2>Web Development</h2>
          <img src={web} alt="" className="card-image" />
          <a href="/projects/web-development" className="card-link">
            Show More <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="service-card">
        <div className="card-content">
          <h2>Mobile Development</h2>
          <img src={app} alt="" className="card-image" />
          <a href="/projects/mobile-development" className="card-link">
            Show More <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Service;
