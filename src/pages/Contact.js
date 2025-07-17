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
    <div className="page-content">
      <h1>Contact Me</h1>
      <p>Got a question, collaboration idea, or just want to say hi? I'd love to hear from you.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      
      <div className="social-links">
        <h2>Connect With Me</h2>
        <div className="social-icons">
          <a href="mailto:rahul@example.com" className="contact-icon">
            <span className="icon">📧</span> Email: rahul@example.com
          </a>
          <a href="https://linkedin.com/in/rahul" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <span className="icon">💼</span> LinkedIn: linkedin.com/in/rahul
          </a>
          <a href="https://github.com/rahul" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <span className="icon">🐙</span> GitHub: github.com/rahul
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <span className="icon">📸</span> Instagram: @yourhandle
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;