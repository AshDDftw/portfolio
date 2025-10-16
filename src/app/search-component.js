'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './search-component.css';

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const searchData = [
    { title: 'Home', path: '/', keywords: ['home', 'landing', 'main'] },
    { title: 'Skills & Tech Stack', path: '/skills', keywords: ['skills', 'tech', 'programming', 'languages'] },
    { title: 'Projects Portfolio', path: '/projects', keywords: ['projects', 'work', 'portfolio', 'apps'] },
    { title: 'Work Experience', path: '/experience', keywords: ['experience', 'work', 'career', 'jobs'] },
    { title: 'Contact Information', path: '/contact', keywords: ['contact', 'email', 'reach', 'connect'] },
    { title: 'About Me', path: '/about', keywords: ['about', 'bio', 'personal', 'story'] }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults(searchData);
    }
  }, [query]);

  const handleSelect = (path) => {
    router.push(path);
    setIsOpen(false);
    setQuery('');
  };

  if (!isOpen) {
    return (
      <button className="search-trigger" onClick={() => setIsOpen(true)}>
        🔍 <span>Search</span> <kbd>Ctrl+K</kbd>
      </button>
    );
  }

  return (
    <div className="search-overlay" onClick={() => setIsOpen(false)}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-header">
          <input
            type="text"
            placeholder="Search pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="search-input"
          />
          <button onClick={() => setIsOpen(false)} className="search-close">✕</button>
        </div>
        <div className="search-results">
          {results.map((item, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleSelect(item.path)}
            >
              <span className="result-title">{item.title}</span>
              <span className="result-path">{item.path}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}