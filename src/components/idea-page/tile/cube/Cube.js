import React from 'react'
import styles from './Cube.css'

const Cube = () => (
  <div className="cube">
    <div className="cube__element cube__element--top-left"></div>
    <div className="cube__element cube__element--top-right"></div>
    <div className="cube__element cube__element--bottom-left"></div>
    <div className="cube__element cube__element--bottom-right"></div>
  </div>
);

export default Cube;
