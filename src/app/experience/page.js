'use client'

import React from 'react';
import { experience } from './data.js';
import {useState, useEffect} from 'react';
import './experience.css';

// app/landing/profile/page.js
export default function ProfilePage() {


  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch experience data
    setExperienceData(experience);
  }, []); 


  return (
    <div>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-card-bg"></div>
            {/* <img src={exp.image} alt={exp.company} className="company-logo" /> */}
            <h3>{exp.jobTitle}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.work}</p>
          </div>
        ))}
        </div>
    </div>
  );
}
