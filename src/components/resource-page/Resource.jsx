import React, { useState, useEffect } from 'react';
import NavBar from '../navigation/Navigation';
import { getBooks } from '../../util/httpClient';
import './Resource.css';

const Resource = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

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
