import React, { useState } from 'react';
import recipeImg from '../assets/images/recipe.png';
import leafImg from '../assets/images/LS-image.png';

const projects = [
  {
    title: 'Recipe Manager App',
    description:
      'A personal recipe management web application built with Flask and Python. Users can add, edit, and delete recipes, categorize them, upload images, and search by ingredients or title.',
    image: recipeImg, 
    link: 'https://github.com/KaPeCode/Recipe-Manager',
  },
  {
    title: 'Leaf Studio Website',
    description:
      'A professional website for a collaborative team of an EPC-registered electrician and a property photographer, showcasing services like EPCs, Retrofit Assessments, Floor Plans, EICR, and Property Photography.',
    image: leafImg, 
    link: 'https://leafstudio.uk',
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card hover:scale-105">
            <img src={project.image} alt={project.title} className="project-image" />
            {project.link ? (
              <h3 className="project-title">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title-link"
                >
                  {project.title}
                </a>
              </h3>
            ) : (
              <h3 className="project-title">{project.title}</h3>
            )}
            <p
              className={`project-description ${
                expandedIndex === index ? 'expanded' : ''
              }`}
              onClick={() => toggleDescription(index)}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;