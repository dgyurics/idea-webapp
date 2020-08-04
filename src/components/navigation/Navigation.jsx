import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <ol className="navigation__menu no-touch">
        <Link to="/resource" className="navigation__menu__link">
          <li className="navigation__menu__item">
            product
          </li>
        </Link>
        <Link to="/resource" className="navigation__menu__link">
          <li className="navigation__menu__item">
            excerpt
          </li>
        </Link>
        <Link to="/contact" className="navigation__menu__link">
          <li className="navigation__menu__item navigation__menu__item--last">
            about
          </li>
        </Link>
      </ol>
    </div>
  );
};

export default Navigation;
