'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './page-transition.css';

const directions = {
  '/': 'from-center',
  '/skills': 'from-left',
  '/projects': 'from-right', 
  '/experience': 'from-top',
  '/contact': 'from-bottom',
  '/about': 'from-left'
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('from-center');

  useEffect(() => {
    setIsTransitioning(true);
    setDirection(directions[pathname] || 'from-center');
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`page-transition ${direction} ${isTransitioning ? 'transitioning' : ''}`}>
      {children}
    </div>
  );
}