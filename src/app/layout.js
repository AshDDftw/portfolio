'use client';
import './globals.css';
import { Navbar } from './navbar';
import React, { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [navigationData, setNavigationData] = useState([]);

  useEffect(() => {
    setNavigationData([
      // { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Techstack", href: "/skills" },
      { id: 3, name: "Projects", href: "/projects" },
      { id: 4, name: "Experience", href: "/experience" },
      { id: 5, name: "Contact", href: "/contact" },
      { id: 6, name: "About Me", href:"/about"}
    ]);
  }, []);

  return (
    <html lang="en">
      <body>

        <div className="main"></div>
 
          <div className="landing-layout">
            <Navbar navigationChildren={navigationData} />
            <main>{children}</main>
          </div>

      </body>
    </html>
  );
}
