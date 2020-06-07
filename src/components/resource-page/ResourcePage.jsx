import React from 'react';
import NavBar from '../navigation/Navigation';
import Books from './books/Books';
import './ResourcePage.css';

const ResourcePage = () => (
  <div className="resource-page">
    <NavBar />
    <div className="resource-page__container">
      <div className="resource-page__main">
        <Books />
      </div>
    </div>
    <div className="resource-footer no-touch">
      <span>Coming soon</span>
    </div>
  </div>
);

export default ResourcePage;
