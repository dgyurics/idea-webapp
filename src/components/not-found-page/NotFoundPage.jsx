import React from 'react';
import NavBar from '../navigation/Navigation';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div className="not-found-page">
    <NavBar />
    <div className="not-found-container">
      <div className="not-found-text not-found-text--center">
        <span className="no-touch">
          <span className="not-found-code">404 </span>
          Not Found
        </span>
      </div>
    </div>
    <div className="not-found-footer no-touch">
      <span>Dennis Gyurics</span>
    </div>
  </div>
);

export default NotFoundPage;
