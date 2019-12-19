import React from 'react';
import NavBar from '../navigation/Navigation';
import { BookProvider } from '../context/BookContext';
import Books from './books/Books';
import './Resource.css';

const Resource = () => (
  <div className="resource-page">
    <NavBar />
    <div className="resource-page__container">
      <div className="resource-page__main">
        <BookProvider>
          <Books />
        </BookProvider>
      </div>
    </div>
    <div className="resource-footer no-touch">
      <span>Coming soon</span>
    </div>
  </div>
);

export default Resource;
