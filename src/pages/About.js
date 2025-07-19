import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-content about-content">
      <div className="section-heading">
        <h2>About Me</h2>
      </div>
      
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I'm Rahul, a software developer with a passion for creating things that live on the internet. 
            My interest in web development started back in 2018 when I decided to try creating custom themes for my blog — turns out hacking together a custom theme taught me a lot about HTML & CSS!
          </p>
          
          <p>
            Fast-forward to today, and I've had the privilege of working on diverse projects, from building APIs to deploying cloud infrastructure. 
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          
          <p>
            My approach to development is guided by a simple philosophy: <span className="highlight">"Code. Break. Learn. Repeat."</span> I believe in learning by doing, understanding the "why" behind technologies, and constantly exploring new ways to solve problems.
          </p>
          
          <p>Here are a few technologies I've been working with recently:</p>
          
          <div className="about-skills">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Three.js</li>
              <li>Python</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
        
        <div className="about-image-container">
          <div className="about-image">
            <img src="/profile.png" alt="Rahul's profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      
      <div className="about-cta">
        <Link to="/contact" className="cta-button">Get In Touch</Link>
      </div>
    </div>
  );
};

export default About;