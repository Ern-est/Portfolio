import React, { useEffect, useState } from 'react';
import './Home.css';
import Blob from './Blob';
import ernestImage from '../assets/Cheruu.png';
import { FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const blobVisible = localStorage.getItem('blobVisible');
    setShowBlob(blobVisible === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('blobVisible', showBlob.toString());
  }, [showBlob]);

  return (
    <section className="home-section">
      <div className="left-section">
        <p className="name">
          <span>I'm a </span>
          <span className="gradient-text">Full-stack Developer</span>
        </p>
        
      </div>
      <div className="image-container">
        <Blob />
        <img src={ernestImage} alt="" className="profile-image" />
      </div>
      <div className="right-section">
      <span className="haed">Services</span>
        <p className="service-text">
        Let's build quality products in programming and design by leveraging my expertise. I am dedicated to delivering exceptional results.
        </p>
        <div className="social-media-icons">
          <a href="https://twitter.com/pro_code_.">
            <FaTwitter color="#1DA1F2" />
          </a>
          <a href="https://instagram.com/ft_jerry_ville">
            <FaInstagram color="#E4405F" />
          </a>
          <a href="https://www.facebook.com/Anest Cheruu">
            <FaFacebook color="#3B5998" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=0748433153">
            <FaWhatsapp color="#25D366" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
