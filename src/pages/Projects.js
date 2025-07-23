import React, { useState } from 'react';

const Projects = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');

  // All projects from the readme file
  const allProjects = [
    {
      id: 1,
      title: 'Interactive 3D Portfolio',
      description: 'A modern, visually engaging personal portfolio built with React, Three.js, and React Three Fiber. Features an interactive 3D word cloud for navigation, a fixed minimized 3D model, bold hero section, and responsive design with dynamic routing.',
      technologies: ['React Three Drei', 'React Router', 'Modern CSS'],
      github: 'https://github.com/racharahul/My_Portfolio_3D',
      external: 'https://my-portfolio-olive-sigma-41.vercel.app/',
      image: '/images/projects/3d words.png',
      category: 'frontend',
      featured: true
    },
    {
      id: 2,
      title: 'GitHub Webhook Activity Feed',
      description: 'A full-stack web application that monitors GitHub repository activities in real-time. It captures Push, Pull Request, and Merge events via webhooks, stores them in MongoDB, and displays them on a live-updating webpage.',
      technologies: ['Python', 'Flask', 'MongoDB', 'PyMongo', 'HTML/CSS', 'JavaScript', 'GitHub Webhooks', 'ngrok'],
      github: 'https://github.com/racharahul/webhook-repo',
      external: '#',
      image: '/images/projects/webhook.webp',
      category: 'fullstack',
      featured: true
    },
    {
      id: 3,
      title: 'RPM (Request Per Minute)',
      description: 'A load balancing demonstration using Nginx, Docker, and Node.js. Features multiple Express.js backend instances, Nginx load balancing, Docker & Docker Compose deployment, in-memory request tracking, and a frontend dashboard with Chart.js.',
      technologies: ['Node.js', 'Express.js', 'Nginx', 'Docker', 'Docker Compose', 'Chart.js'],
      github: 'https://github.com/racharahul/rpm',
      external: '#',
      image: '/images/projects/rpm.png',
      category: 'backend',
      featured: true
    },
    {
      id: 4,
      title: 'Personal Finance Visualizer',
      description: 'An intuitive web app for tracking personal finances with transaction tracking, category management, and budgeting features. Built with Next.js, React, shadcn/ui, Recharts, and Tailwind CSS.',
      technologies: ['Next.js', 'React', 'shadcn/ui', 'Tailwind CSS', 'Recharts', 'Vercel'],
      github: 'https://github.com/racharahul/personal-finance-visualizer',
      external: '#',
      image: '/images/projects/finance.png',
      category: 'frontend',
      featured: true
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeTab);

  return (
    <div className="page-content projects-content">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>
      
      <div className="projects-intro">
        <h1>My Work</h1>
        <p>A showcase of my projects, ranging from web applications and interactive experiences to backend systems and DevOps solutions.</p>
      </div>
      
      {/* Project Filter Tabs */}
      <div className="project-filter-container">
        <div className="project-filter-tabs">
          <button 
            className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-tab ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-tab ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-tab ${activeTab === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveTab('fullstack')}
          >
            Full Stack
          </button>
        </div>
      </div>
      
      {/* Projects in Highlight Style */}
      {filteredProjects.map((project) => (
        <div key={project.id} className="project-highlight-section">
          <div className="highlight-header">
            <h2>{project.title}</h2>
          </div>
          
          <div className="highlight-content">
            <div className="highlight-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="highlight-details">
              <p>{project.description}</p>
              <div className="highlight-features">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="feature-tag">{tech}</div>
                ))}
              </div>
              <div className="highlight-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="highlight-button">
                  <i className="fas fa-code"></i> View Code
                </a>
                {project.external !== '#' && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="highlight-button">
                    <i className="fas fa-external-link-alt"></i> Visit Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;