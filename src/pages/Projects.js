import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '3D Interactive Portfolio',
      description: 'A unique portfolio website featuring an interactive 3D word cloud for navigation, built with React and Three.js.',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'CSS3'],
      image: 'project1.jpg', // You would add actual images later
      link: '#'
    },
    {
      id: 2,
      title: 'Containerized Microservices API',
      description: 'A scalable backend system built with containerized microservices architecture for high availability and easy deployment.',
      technologies: ['Python', 'Docker', 'RESTful APIs', 'MySQL', 'CI/CD Pipeline'],
      image: 'project2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'DevOps Automation Suite',
      description: 'A collection of tools and scripts for automating deployment workflows, monitoring, and infrastructure management.',
      technologies: ['Python', 'Bash', 'Docker', 'GitHub Actions', 'Cloud Services'],
      image: 'project3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Real-time Data Dashboard',
      description: 'An interactive dashboard for visualizing and analyzing real-time data streams with customizable widgets and alerts.',
      technologies: ['React.js', 'Node.js', 'WebSockets', 'Chart.js', 'Bootstrap'],
      image: 'project4.jpg',
      link: '#'
    }
  ];

  return (
    <div className="page-content">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {/* In a real application, you would use actual images */}
              <div className="placeholder-image">{project.title[0]}</div>
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;