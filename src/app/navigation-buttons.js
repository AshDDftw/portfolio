'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useCallback } from 'react';
import './navigation-buttons.css';

const routes = ['/', '/skills', '/projects', '/experience', '/contact', '/about'];

export default function NavigationButtons() {
  const router = useRouter();
  const pathname = usePathname();
  
  const currentIndex = routes.indexOf(pathname);
  const canGoForward = currentIndex < routes.length - 1;
  const canGoBack = currentIndex > 0;

  const goForward = useCallback(() => {
    if (canGoForward) router.push(routes[currentIndex + 1]);
  }, [canGoForward, router, currentIndex]);

  const goBack = useCallback(() => {
    if (canGoBack) router.push(routes[currentIndex - 1]);
  }, [canGoBack, router, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (e.shiftKey) {
          goBack();
        } else {
          goForward();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, goBack, goForward]);

  return (
    <>
      <button 
        className={`nav-btn forward ${!canGoForward ? 'disabled' : ''}`}
        onClick={goForward}
        disabled={!canGoForward}
      >
        <span className="key-text">Enter</span>
      </button>
      
      <button 
        className={`nav-btn back ${!canGoBack ? 'disabled' : ''}`}
        onClick={goBack}
        disabled={!canGoBack}
      >
        <span className="key-combo">
          <span className="shift">Shift</span>
          <span className="plus">+</span>
          <span className="enter">Enter</span>
        </span>
      </button>
    </>
  );
}