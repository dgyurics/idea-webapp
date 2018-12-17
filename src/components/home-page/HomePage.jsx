import React from 'react';
import NavBar from '../navigation/Navigation';
import './HomePage.css';

const Home = () => (
  <div className="home-page">
    <NavBar />
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

export default Home;
