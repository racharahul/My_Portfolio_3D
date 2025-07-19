import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form - in a real portfolio, this would send an email.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-content contact-content">
      <div className="section-heading">
        <h2>Contact</h2>
      </div>
      
      <div className="contact-intro">
        <h1>Get In Touch</h1>
        <p>I'm currently open to new opportunities and collaborations. Whether you have a question, project idea, or just want to connect, my inbox is always open. I'll do my best to get back to you!</p>
      </div>
      
      <div className="contact-grid">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Where can I reach you?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h3>CONNECT WITH ME</h3>
          <div className="social-links">
            <div className="social-icons">
              <a href="https://linkedin.com/in/racha-rahul-vadlakunta-600814152/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <span className="icon"><i className="fab fa-linkedin-in"></i></span>
                LinkedIn
              </a>
              <a href="https://github.com/racharahul" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <span className="icon"><i className="fab fa-github"></i></span>
                GitHub
              </a>
              <a href="https://www.instagram.com/racha_rahul" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <span className="icon"><i className="fab fa-instagram"></i></span>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-alternative">
        <h3>PREFER A DIRECT EMAIL?</h3>
        <p>If you prefer to reach out directly without using the form, feel free to send me an email.</p>
        <a href="mailto:racharahul456@gmail.com" className="email-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <i className="fab fa-google" style={{ fontSize: '1.2rem' }}></i> Gmail
        </a>
      </div>
    </div>
  );
};

export default Contact;