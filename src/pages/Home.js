import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-content home-content">
      <section className="hero-section">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">Rahul.</h1>
        <h2 className="hero-subtitle">I build things for the web.</h2>
        <p className="hero-description">
          I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products using modern web technologies.
        </p>
        <Link to="/projects" className="cta-button">Check out my work</Link>
      </section>
      
      <section className="featured-section">
        <div className="section-heading">
          <h2>What I Do</h2>
        </div>
        
        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-card-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>Building responsive, high-performance web applications with React, Node.js, and modern JavaScript.</p>
            <Link to="/projects" className="featured-card-link">View Projects <i className="fas fa-arrow-right"></i></Link>
          </div>
          
          <div className="featured-card">
            <div className="featured-card-icon">
              <i className="fas fa-cube"></i>
            </div>
            <h3>3D & Interactive</h3>
            <p>Creating immersive 3D experiences using Three.js, React Three Fiber, and WebGL technologies.</p>
            <Link to="/skills" className="featured-card-link">See My Skills <i className="fas fa-arrow-right"></i></Link>
          </div>
          
          <div className="featured-card">
            <div className="featured-card-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>DevOps & Automation</h3>
            <p>Streamlining deployment processes, CI/CD pipelines, and cloud infrastructure for modern applications.</p>
            <Link to="/contact" className="featured-card-link">Get In Touch <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;