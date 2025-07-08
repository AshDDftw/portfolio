'use client';

import React, { useState, useEffect } from 'react';
import './about.css';
import { aboutSections } from './data.js';

export default function AboutPage() {
  const [aboutCards, setaboutCards] = useState([]);

  useEffect(() => {
    console.log(aboutSections);
    setaboutCards(aboutSections);
  }, []);

  return (
    <div className="about-page">
      {aboutCards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt="" />
          <div className="info">
            <strong>{card.title}</strong>
            <span className="sub-title">{card.subtitle}</span>
            <hr />
            <div className="hide-info">
              <span
                className="text"
                dangerouslySetInnerHTML={{ __html: card.info }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
