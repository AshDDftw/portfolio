'use client'

import React from 'react';
import { useState,useEffect } from 'react';
import {projects as projectsList} from './data.js';
import './projects.css';

export default function Contact(){

   const [projectsData, setprojectsData] = useState([]);
   const [sections,setSections] = useState([]);

    useEffect(() => {
        
        // const sections = new Set();
        // projectsList.map(project => {
        //     sections.add(project.section);
        //     // return project;
        // });
        const sectionNames = Array.from(new Set(projectsList.map(project => project.section)));
        sectionNames.push("All Projects");
        
        console.log(sectionNames);

        // setprojectsData(projects);
        setprojectsData(projectsList);
        setSections(sectionNames);
        // setSections(Array.from(sections));

        // console.log(sections);


    }, []);

    function handleSearch(sections){

        return () => {

            if(sections === "All Projects"){
                setprojectsData(projectsList);
                console.log("All Projects");
                console.log(projectsList);
            }
            else{
            const filteredProjects = projectsList.filter(project => project.section === sections);
            setprojectsData(filteredProjects);
            }
        }

    }
    return(
        <div>
            <div className='project-search' >
                {sections.map((section, index) => (
                    <button className='projectSearchButton' key={index} onClick={handleSearch(section)}>{section}</button>
                ))}
            </div>
            <div className="projects-container">
                
                {projectsData.map((project, index) => (
  <div key={index}>
    <h2 className='project-section'>{project.section}</h2>
    <h3 className='project-name'>{project.name}</h3>
    <div className="project-card">
      <p>{project.description}</p>
    </div>
    <div className="tech-stack">
      {project.techstack.map((tech, techIndex) => (
        <img key={techIndex} src={tech} alt={`Tech ${techIndex + 1}`} />
      ))}
    </div>
    <a className="tech-stack" href={project.github} target="_blank" rel="noopener noreferrer">
      <img src="techstackicons/github.png" alt="GitHub" />
    </a>
  </div>
))}

            </div>
        </div>
    )
}