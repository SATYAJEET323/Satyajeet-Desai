import React from 'react';
import './Skills.css';

// SkillCard Component
const SkillCard = ({ skill, description, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{skill}</h3>
      <p>{description}</p>
    </div>
  );
};

// Skills Data
const skills = [
  {
    skill: 'React.js',
    description: 'Building responsive and dynamic web applications.',
    icon: '⚛️',
  },
  {
    skill: 'JavaScript',
    description: 'Programming language for web development and more.',
    icon: '🟨',
  },
  {
    skill: 'HTML & CSS',
    description: 'Designing and structuring web pages.',
    icon: '📄',
  },
  {
    skill: 'Node.js',
    description: 'Server-side JavaScript runtime environment.',
    icon: '🌐',
  },
  {
    skill: 'Python',
    description: 'Versatile programming language for backend and data science.',
    icon: '🐍',
  },
  {
    skill: 'Java',
    description: 'Versatile programming language for applications.',
    icon: '☕',
  },
  {
    skill: 'React Native',
    description: 'Dynamic UI with JavaScript.',
    icon: '📱⚛️',
  },
  {
    skill: 'SQL',
    description: ' Language for managing relational databases.',
    icon: '🗄️',
  },
  {
    skill: 'PHP',
    description: 'Server-side scripting for websites.',
    icon: '🐘',
  },
  {
    skill: 'Webflow',
    description: 'Visual responsive website design tool.',
    icon: '🖌️',
  },
  {
    skill: 'WordPress',
    description: 'Website building and management platform.',
    icon: '🌐',
  },
  {
    skill: 'Project Management',
    description: 'Planning and executing project goals.',
    icon: '📋',
  },
];

// Software Data
const software = [
  {
    skill: 'Visual Studio Code',
    description: 'Lightweight code editor with extensions.',
    icon: '🖥️',
  },
  {
    skill: 'GitHub',
    description: 'Code hosting and collaboration platform.',
    icon: '🐙',
  },
  {
    skill: 'Git',
    description: 'Version control system for code.',
    icon: '🔀',
  },
  {
    skill: 'Android Studio',
    description: 'Android app development environment.',
    icon: '🤖',
  },
  {
    skill: 'MySQL',
    description: 'Relational database management system.',
    icon: '🗄️',
  },
  {
    skill: 'Figma',
    description: 'Collaborative design and prototyping tool for UI/UX.',
    icon: '🎨',
  },
];

// App Component
function Skill() {
  return (
    <div className="skills-section">
      <div className="skills" id="skills">
        <h1>My Technical Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>

      <div className="software" id="software">
        <h1>Software I Use</h1>
        <div className="skills-container">
          {software.map((tool, index) => (
            <SkillCard
              key={index}
              skill={tool.skill}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
