'use client';

import React from 'react';
import Link from 'next/link';
import './navbar.css'

export function Navbar({ navigationChildren }) {
  if (!Array.isArray(navigationChildren)) return null; // Prevent errors

  return (
    <div className='Navbar'>
      <div className='Navbar-children'>
        <ul className='Navbar-children-ul'>
          {navigationChildren.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                <span className="Navbar-children-li">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
