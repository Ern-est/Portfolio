import React from 'react';
import './Testimonials.css'; // Import the CSS file

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Vic Kofi',
      feedback: 'Working with Ernest was a delight! He created an exceptional UI/UX design for our project that perfectly aligned with our vision. The attention to detail and creativity he brought to the table was outstanding. Highly recommended!',
      contact: 'vic.kofi@gmail.com',
    },
    {
      name: 'John Smith',
      feedback: 'Ernest is a brilliant web developer! He built our website from scratch and exceeded our expectations. His coding skills, problem-solving abilities, and commitment to quality were remarkable. It was a pleasure collaborating with him.',
      contact: 'john.smith@gmail.com',
    },
    {
      name: 'Davy Johnson',
      feedback: 'Ernest is an amazing mobile developer! He developed our iOS app and delivered a seamless user experience. His technical expertise, dedication, and timely communication made the entire development process smooth and successful.',
      contact: 'davy.johnson@gmail.com',
    },
    {
      name: 'Chirchir Davis',
      feedback: 'Ernest is a talented mobile dev who built our Android app with precision. His attention to detail and understanding of mobile app development best practices were commendable. He was responsive and receptive to our feedback throughout the project.',
      contact: 'chirchir.davis@gmail.com',
    },
    // Add more testimonials here
  ];

  return (
    <div className='test'>
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            <p className="contact-info">Contact: <a href={`mailto:${testimonial.contact}`}>{testimonial.contact}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
