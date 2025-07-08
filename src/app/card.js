import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './card.css';

const Card = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    router.push('/skills');
  };

  return (
    <div className="center">
      <div className="music-card">
        <div className="album-art">
          <img src="/naruto.jpg" alt="Album Cover" />
          <div className="play-overlay">
            <button 
              className={`play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlay}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>
        <div className="track-info">
          <h2 className="track-title">Wannabe Software Engineer</h2>
          <p className="artist-name">Still Grinding</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="time-info">
            <span>1:23</span>
            <span>3:20</span>
          </div>
          <div className="controls">
            <button className="control-btn">⏮</button>
            <button className="control-btn main-play" onClick={handlePlay}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="control-btn">⏭</button>
          </div>
        </div>
        <div className="intro-text">
          <h1>Music helps a lot! Trust me</h1>
          <p>ITBRIADTINTC</p>
        </div>
      </div>
    </div>
  );
};

export default Card;