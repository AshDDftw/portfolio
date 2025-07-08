'use client';

import React, { useState, useEffect } from 'react';
import './contact.css';
import { contactData } from './data.js';

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactData);
  }, []);

  const getClassForType = (type) => {
    switch (type.toLowerCase()) {
      case 'email':
        return 'email';
      case 'reddit':
        return 'reddit';
      case 'discord':
        return 'discord';
      case 'linkedin':
        return 'linkedin';
      default:
        return '';
    }
  };

  return (
    <div className="contactPage">
      {/* Contact Form */}
      <div className="contactForm">
        <h2>Send Me a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" className="formInput" />
          <input type="email" placeholder="Your Email" className="formInput" />
          <textarea placeholder="Your Message" className="formTextarea" rows="4"></textarea>
          <button type="submit" className="formButton">Send Message</button>
        </form>
      </div>

      {/* Contact Cards */}
      <div className="contactContainer">
        {/* <h1>Contact Information</h1> */}
        <div className="container">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contactCard ${getClassForType(contact.type)}`}
            >
              <div className="contactDetails">
                <h2>{contact.type}</h2>
                <p className="contactLink">{contact.account}</p>
              </div>
              <div className="hvr-icon-spin">
                <img
                  src={contact.image}
                  alt={contact.type}
                  className="contactImage hvr-icon"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
