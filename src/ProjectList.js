// projectlist.js
import React from 'react';
import ProjectCard from './ProjectCard';
import "./ProjectList.css"

const ProjectList = () => {
  const projects = [
    {
      title: 'Cafe Management',
      description: 'This is a simple Cafe Management System built with Python and Tkinter. The system allows for managing orders, calculating costs, and maintaining a record of items sold..',
      link: 'https://github.com/SATYAJEET323/Cafe-Managment',
    },
    {
        title: 'Gym Locator',
        description: 'The Gym-Locator project is a web development initiative designed to help users easily find gyms in their vicinity. This platform aims to provide a seamless and intuitive user experience for fitness enthusiasts seeking nearby workout facilities.',
        link: 'https://github.com/SATYAJEET323/GYM-LOCATOR',
      },
    {
      title: 'Railway Reservation System',
      description: 'The Indian Railway Ticket Management Project application aims to streamline the process of booking, managing, and tracking railway tickets, making it easier for users to plan their travel.',
      link: 'https://github.com/SATYAJEET323',
    },
    
    {
      title: 'DSA Code Snippets',
      description: 'This Phenomenon is developed for getting the Leetcode answers in every possible languages in Our DSA Code Snippets Platform',
      link: 'https://satyajeet323.github.io/DSA-Snippets',
    },
    {
      title: 'Face Detection Model',
      description: 'The Face Detection Model is developed by usig machine learing model like yolo_v8 by using python and such libraries.',
      link: 'https://satyajeet323.github.io/raw_prj/',
    },
    {
      title: 'Music Player',
      description: 'The Music Player is Developed to Listen a music on web like for entertainment purpose',
      link: 'https://github.com/SATYAJEET323/CodexTune/',
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
