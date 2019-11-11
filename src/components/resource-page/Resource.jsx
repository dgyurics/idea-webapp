import React, { useState, useEffect } from 'react';
import NavBar from '../navigation/Navigation';
import './Resource.css';

const Resource = () => {
  const [books] = useState([
    { title: 'altruism', alt: 'altruism', author: 'mattieu ricard', src: 'images/altruism.png' },
    { title: 'grit', alt: 'grit', author: 'angela duckworth', src: 'images/grit.png' },
    { title: 'the alchemist', alt: 'the alchemist', author: 'paulo coelho', src: 'images/alchemist.png' },
    { title: 'little prince', alt: 'the little prince', author: 'antoine de saint exupery', src: 'images/littleprince.png' },
    { title: 'meditations', alt: 'meditations', author: 'marcus aurelius', src: 'images/meditations.png' },
  ]);

  useEffect(() => {});

  const renderBooks = () => books.map(book => (
    <div className="book-container" key={book.alt}>
      <img className="book" src={book.src} alt={book.alt} />
    </div>
  ));

  return (
    <div className="resource-page">
      <NavBar />
      <div className="resource-page__container">
        <div className="resource-page__main">
          { renderBooks() }
        </div>
      </div>
      <div className="resource-footer no-touch">
        <span>Coming soon</span>
      </div>
    </div>
  );
};

export default Resource;
