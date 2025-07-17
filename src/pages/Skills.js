import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Technical Skills',
      skills: [
        'Python', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 
        'RESTful APIs', 'Node.js', 'Docker', 'MySQL', 'Containerized Deployments', 
        'Cloud-Based Development', 'Git', 'GitHub', 'Postman', 'CI/CD Pipelines', 'DevOps Practices'
      ]
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-solving', 'Teamwork', 'Quick Learner', 'Strong Communication', 'Detail-Oriented']
    },
    {
      category: 'Languages',
      skills: ['English', 'Telugu', 'Hindi']
    }
  ];

  return (
    <div className="page-content">
      <h1>Skills</h1>
      <p>Here are some of the technologies and tools I work with:</p>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h2>{category.category}</h2>
            <ul className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;