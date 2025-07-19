import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'fas fa-code',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'Three.js', level: 75 },
        { name: 'WebGL', level: 65 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'Cloud Services (AWS)', level: 70 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: 'fas fa-users',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 85 },
        { name: 'Adaptability', level: 90 },
        { name: 'Project Management', level: 80 }
      ]
    },
    {
      category: 'Languages',
      icon: 'fas fa-language',
      skills: [
        { name: 'English', level: 95 },
        { name: 'Telugu', level: 100 },
        { name: 'Hindi', level: 90 }
      ]
    }
  ];

  return (
    <div className="page-content skills-content">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      
      <div className="skills-intro">
        <h1>My Technical Toolkit</h1>
        <p>Here's a comprehensive overview of the technologies, tools, and skills I've acquired throughout my journey as a developer. I'm constantly learning and expanding this list!</p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="skill-category-icon">
              <i className={category.icon}></i>
            </div>
            <h3>{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-level">
                    <div 
                      className="skill-level-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default Skills;