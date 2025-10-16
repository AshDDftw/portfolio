import React from 'react';
import { useRouter } from 'next/navigation';
import './HomeButton.css';

const HomeButton = () => {
  const router = useRouter();

  return (
    <button 
      className="home-button"
      onClick={() => router.push('/')}
      title="Go to Home"
    >
      Home
    </button>
  );
};

export default HomeButton;