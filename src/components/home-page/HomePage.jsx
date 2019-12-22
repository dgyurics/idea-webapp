import React from 'react';
import NavBar from '../navigation/Navigation';
import './HomePage.css';

if (!PRODUCTION) {
  /* eslint-disable no-console */
  console.log('Looks like we are in development mode!');
}

const HomePage = () => (
  <div className="home-page">
    <NavBar whiteBackground={false} />
    <div className="home-container">
      <div className="home-container__logo">
        <h1 className="home-logo no-touch">
          <span>A </span>
          <span className="home-logo--lrg">life</span>
          <span> well lived</span>
        </h1>
      </div>
      <div className="home-footer no-touch">
        <span>Dennis Gyurics</span>
      </div>
    </div>
  </div>
);

export default HomePage;
