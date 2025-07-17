import React from 'react';

const About = () => {
  return (
    <div className="page-content">
      <h1>About Me</h1>
      <div className="about-intro">
        <h2>Hi, I'm Rahul 👋</h2>
        <p>I'm an aspiring software engineer with a love for building scalable backend systems, experimenting with DevOps tools, and diving deep into real-world, hands-on projects.</p>
      </div>
      
      <div className="about-details">
        <h2>My Learning Philosophy</h2>
        <p>My learning philosophy is simple: <strong>"Code. Break. Learn. Repeat."</strong> I thrive on building things from scratch, understanding the "why" behind the tech, and constantly exploring new ways to make things better.</p>
        
        <h2>My Approach</h2>
        <p>Whether it's containers, APIs, or full-stack development, I believe in learning by doing — not just tutorials, but through building things that challenge me and teach me something new every day.</p>
        
        <h2>Beyond Coding</h2>
        <p>When I'm not debugging or deploying, you'll find me turning my curiosity into side projects that often start with a "what if?" and end with lessons I never saw coming.</p>
        
        <div className="about-cta">
          <p>🛠️ Let's connect and collaborate on tech that matters.</p>
        </div>
      </div>
    </div>
  );
};

export default About;