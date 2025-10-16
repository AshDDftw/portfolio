'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import './professional-enhancements.css';

export default function ProfessionalEnhancements() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('dark');
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState({ projects: 0, experience: 0, skills: 0 });

  const routes = ['/', '/skills', '/projects', '/experience', '/contact', '/about'];
  const currentPage = routes.indexOf(pathname) + 1;

  useEffect(() => {
    setProgress((currentPage / routes.length) * 100);
    
    // Animate stats
    const timer = setTimeout(() => {
      setStats({ projects: 15, experience: 3, skills: 20 });
    }, 500);

    return () => clearTimeout(timer);
  }, [currentPage, routes.length]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">{currentPage}/{routes.length}</span>
      </div>

      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>

      {/* Stats Counter (only on home) */}
      {pathname === '/' && (
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{stats.projects}+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.experience}+</div>
            <div className="stat-label">Years</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.skills}+</div>
            <div className="stat-label">Skills</div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Portfolio</span>
        {pathname !== '/' && <span> / {pathname.slice(1)}</span>}
      </div>
    </>
  );
}