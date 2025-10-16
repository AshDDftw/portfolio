'use client'

import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import './about.css';

export default function About() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'Frontend', level: 95, color: '#61dafb' },
    { name: 'Backend', level: 88, color: '#68d391' },
    { name: 'Mobile', level: 82, color: '#f093fb' },
    { name: 'DevOps', level: 75, color: '#ffd93d' },
    { name: 'AI/ML', level: 70, color: '#ff6b6b' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-container">
      <HomeButton />
      <div className="mouse-follower" 
           style={{ left: mousePosition.x, top: mousePosition.y }}></div>
      
      <div className="about-hero">
        <div className="hero-section">
          <div className="profile-showcase">
            <div className="profile-image-container">
              <div className="floating-elements">
                <div className="float-item">💻</div>
                <div className="float-item">🚀</div>
                <div className="float-item">⚡</div>
                <div className="float-item">🎨</div>
              </div>
              {/* <img src="/naruto.jpg" alt="Profile" className="profile-image" /> */}
              <div className="image-glow"></div>
            </div>
            
            <div className="profile-content">
              <div className="typing-animation">
                <h1>About <span className="highlight">Me</span></h1>
              </div>
              <p className="tagline">Turning ideas into digital reality</p>
              <div className="description">
                <p>I&apos;m a passionate developer who loves creating beautiful, functional, and user-friendly applications. With expertise across the full stack, I bring ideas to life through clean code and innovative solutions.</p>
              </div>
              
              <div className="quick-stats">
                <div className="stat-bubble">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-bubble">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-bubble">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-showcase">
          <h2>Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skills-radar">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`skill-item ${activeSkill === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveSkill(index)}
                  style={{ '--skill-color': skill.color }}
                >
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
            
            <div className="skill-visualization">
              <div className="radar-chart">
                <div className="radar-grid"></div>
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="radar-point"
                    style={{
                      '--angle': `${(index * 72)}deg`,
                      '--distance': `${skill.level}%`,
                      '--color': skill.color
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="journey-section">
          <div className="journey-pun">
            <h2>The Journey Hasn&apos;t Even Started Yet</h2>
            <div className="wink-emoji">😉</div>
            <p>Stay tuned for the adventure ahead!</p>
          </div>
        </div>

        <div className="fun-facts">
          <h2>When I&apos;m Not Coding</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <div className="fact-icon">☕</div>
              <p>I&apos;ve consumed over <strong>1,825</strong> cups of coffee while coding</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🌙</div>
              <p>I&apos;m a <strong>night owl</strong> - my best code happens after midnight</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🎮</div>
              <p>I built my first game at age <strong>16</strong> using Unity</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🎵</div>
              <p>I code to <strong>lo-fi beats</strong> and sometimes classical music</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">📚</div>
              <p>I love reading <strong>sci-fi novels</strong> and tech blogs in my free time</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🏃</div>
              <p>I go for <strong>morning runs</strong> to clear my mind before coding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}