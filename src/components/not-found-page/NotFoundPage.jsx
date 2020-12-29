import React from 'react';
import NavBar from '../navigation/Navigation';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div className="not-found-page">
    <NavBar />
    <div className="not-found-container">
      <div className="not-found-container__logo">
        <h1 className="not-found-logo no-touch">
          <span className="not-found-code">404 </span>
          Not Found
        </h1>
      </div>
      <div className="not-found-footer no-touch">
        <span>Dennis Gyurics</span>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
