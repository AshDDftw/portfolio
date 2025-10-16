'use client';

import React, { useEffect, useState } from 'react';
import Card from './card';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Judges a book by its cover.....";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`landing-container ${isVisible ? 'reveal active' : 'reveal'}`}>
      {/* Hero Section */}
      <div className='hero-section'>
        <div className='website-info hover-lift'>
          <div className='web-info-text'>
            <p>🚀 Portfolio v2.0 - Always evolving, always improving</p>
            <p>Experience the journey of continuous development</p>
          </div>
        </div>
        
        <div className='profilepicsection hover-lift'>
          <div className='profile-glow'></div>
          <p className='profilepictext'>
            Hello World! 👋 Nice to meet you!
          </p>
          <img className='profilepic' src='profilepic.png' alt='profile pic' />
        </div>
      </div>

      {/* Dynamic Text Section */}
      <div className='text-section'>
        <p className='intro typewriter'>
          {typewriterText}<span className="highlight">cover</span>
        </p>
        <p className='intro2 fade-in'>
          Because if the cover doesn&apos;t impress you, what else can? ✨
        </p>
        <p className='intro3 slide-up'>Someone who creates experiences</p>
      </div>

      {/* CTA Section */}
      <div className='cta-section'>
        <button className='cta-button hover-lift'>
          Explore My Work 🚀
        </button>
      </div>

      <div className="card hover-lift">
        <Card />
      </div>
    </div>
  );
}
