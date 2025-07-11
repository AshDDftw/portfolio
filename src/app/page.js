'use client';

import React from 'react';
// import RootLayout from './layout';
import Card from './card'; // Adjust the path if needed

export default function LandingPage() {
  return (
    <div>
      <div className='website-info'>
        <div className='web-info-text'>
          <p>This website is always under development , so if any links dont work or pages are not responsive means I was experimenting .</p>
          Please bear. Sorry....
        </div>
      </div>
      <div className='profilepicsection'>
        <p className='profilepictext'>
          This is me! Nice to meet you!
        </p>
        <img className='profilepic' src='profilepic.png' alt='profile pic' />
      </div>

      <div>
        <p className='intro'>
          Judges a book by its <span className="highlight">cover</span>.....
        </p>
        <p className='intro2'>
          Because if the cover does not impress you what else can?
        </p>
        <p className='intro3'>Someone who</p>
      </div>

      <div className="card">
      <Card />
      </div>
      
    </div>
  );
}
