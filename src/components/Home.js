import React, { useEffect, useState } from 'react';
import './Home.css';
import Blob from './Blob';
import ernestImage from '../assets/Cheruu.png';
import { FaTwitter, FaInstagram, FaFacebook, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

function Home() {
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
      <div className="text-container">
        <p className="name">
          <span>I'm a </span>
          <span className='gradient-text'>Full-stack developer</span>
        </p>
        {/* Add unique animation class to name for cool animation */}
      </div>
      <div className="image-container">
        <Blob />
        <img src={ernestImage} alt="" className="profile-image" />
      </div>
      <div className="social-media-container">
        <p className="service-text">
          <span className='haed'>Services</span>
          <span>Let's build quality products in </span>
          <span>programming and design </span>
          <span>with my service.</span>
        </p>
        <div className="show-more">
        <a href="/projects">
          Show More <FaArrowRight />
        </a>
      </div>
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
}

export default Home;
