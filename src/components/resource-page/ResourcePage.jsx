import React from 'react';
import NavBar from '../navigation/Navigation';
import Products from './products/Products';
import './ResourcePage.css';

const ResourcePage = () => (
  <div className="resource-page">
    <NavBar />
    <div className="resource-page__container">
      <div className="resource-page__main">
        <Products />
      </div>
    </div>
    <div className="resource-footer no-touch">
    </div>
  </div>
);

export default ResourcePage;
