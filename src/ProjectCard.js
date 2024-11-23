// projectcard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
        <div className="project-card">
          <div className="project-card-content">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              Check it Out
            </a>
          </div>
        </div>
  );
};
export default ProjectCard;