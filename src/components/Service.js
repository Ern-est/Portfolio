import React from 'react';
import './Service.css';
import { FaArrowRight } from 'react-icons/fa';
import Ernest from '../assets/Hernest.png'; // Import your profile image
import web from '../assets/Webdev.jpg'; // Import your profile image
import app from '../assets/app.png'; // Import your profile image

function Service() {
  return (
    <section className='safes'>
      <h1>Services</h1>
    <div className="services-section">
      <div className="service-card">
        <h2>UI/UX Design</h2>
        <img src={Ernest} alt="" className="Hernest" />

        {/*<p>
          I specialize in creating visually stunning and user-friendly interfaces that enhance the overall user experience and drive engagement. From wireframing to prototyping, I ensure that every detail is meticulously designed to meet your project goals and exceed expectations.
        </p>*/}
        <a href="/projects/ui-ux">
          Show More <FaArrowRight />
        </a>
      </div>

      <div className="service-card">
        <h2>Web Development</h2>
        <img src={web} alt="" className="app" />

        {/*<p>
          As a skilled web developer, I am proficient in building high-performance web applications using latest technologies. Whether it's a static  or dynamic webapp, I have the expertise to develop robust and scalable solutions tailored to your specific needs.Let's collaborate to bring your web ideas to reality!
      </p>*/}
        <a href="/projects/web-development">
          Show More <FaArrowRight />
        </a>
      </div>

      <div className="service-card">
        <h2>Mobile Development</h2>
        <img src={app} alt="" className="app" />

        {/*<p>
          With passion for mobile dev,I leverage the latest practices to build user-friendly apps that run  on iOS and Android devices. From concept to deployment, I ensure that your app is designed to delight users and achieve your business objectives. Let's work together to turn your project into reality.
    </p>*/}
        <a href="/projects/mobile-development">
          Show More <FaArrowRight />
        </a>
      </div>
    </div>
    </section>
  );
}

export default Service;
