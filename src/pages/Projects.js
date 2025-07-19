import React from 'react';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: '3D Interactive Portfolio',
      description: 'A unique portfolio website featuring an interactive 3D word cloud for navigation. This project showcases advanced Three.js integration with React to create an immersive user experience that stands out from traditional portfolio sites. The 3D scene minimizes to a circular icon when navigating to content pages, providing a seamless and engaging user experience.',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'React Three Drei', 'React Router', 'CSS3'],
      github: 'https://github.com/racharahul/My_Portfolio_3D',
      external: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Containerized Microservices API',
      description: 'A scalable backend system built with containerized microservices architecture for high availability and easy deployment. This project implements best practices for service isolation, API gateway patterns, and automated scaling.',
      technologies: ['Python', 'Docker', 'RESTful APIs', 'MySQL', 'CI/CD Pipeline'],
      github: 'https://github.com/username/microservices-api',
      external: '#',
      featured: true
    },
  ];
  
  // Featured projects only

  return (
    <div className="page-content projects-content">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>
      
      <div className="projects-intro">
        <h1>Things I've Built</h1>
        <p>A selection of projects I've worked on, from web applications to backend systems and DevOps solutions.</p>
      </div>
      
      {/* Featured Projects */}
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="featured-project" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ 
              width: '100%', 
              height: '300px', 
              backgroundImage: 'url("/3d words.png")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 'var(--border-radius)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '30px',
              opacity: '0.85',
              backgroundColor: 'var(--color-navy-light)',
              mixBlendMode: 'luminosity',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-navy)',
                opacity: '0.2',
                borderRadius: 'var(--border-radius)'
              }}></div>
            </div>
            <div style={{ width: '100%' }}>
              <p className="featured-project-overline">Featured Project</p>
              <h3 className="featured-project-title">{project.title}</h3>
              <div className="featured-project-description">
                <p>{project.description}</p>
              </div>
              <div className="featured-project-links" style={{ marginTop: '20px' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                  <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
                  <span>GitHub</span>
                </a>
                <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* End of Featured Projects */}
    </div>
  );
};

export default Projects;