import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-bg-container">
      <div className="home-bg-image" />
      <div className="home-bg-overlay">
        <section className="hero-section hero-section-centered">
          <div className="hero-content">
            <h1>Hi! Rahul Here</h1>
            <p>I love building modern, scalable, and visually engaging web experiences.<br />
              <span style={{color:'#00e6ff'}}>Full-stack developer</span> | <span style={{color:'#7c3aed'}}>3D Enthusiast</span> | <span style={{color:'#00e6ff'}}>DevOps Explorer</span>
            </p>
            <a href="#features" className="cta-button">Explore My Work</a>
          </div>
        </section>
        <section className="features-section" id="features">
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="Web">💻</span>
            <h3>Web Development</h3>
            <p>Crafting responsive, high-performance web apps with React, Node.js, and Three.js.</p>
            <Link to="/projects">See Projects</Link>
          </div>
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="3D">🌐</span>
            <h3>3D & Interactive</h3>
            <p>Immersive 3D experiences using React Three Fiber and creative UI/UX design.</p>
            <Link to="/skills">My Skills</Link>
          </div>
          <div className="feature">
            <span className="feature-icon" role="img" aria-label="DevOps">⚙️</span>
            <h3>DevOps & Automation</h3>
            <p>Streamlining deployment, CI/CD, and cloud workflows for modern development.</p>
            <Link to="/contact">Contact Me</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;