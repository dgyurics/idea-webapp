import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  state = {
    visible: false,
  };

  onClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render = () => {
    const { visible } = this.state;
    const { whiteBackground } = this.props;
    const navigationClass = visible ? 'navigation' : 'navigation navigation--hidden';
    const menuClass = whiteBackground ? 'navigation__menu-icon navigation__menu-icon--black' : 'navigation__menu-icon';
    return (
      <div className={navigationClass}>
        <div className="navigation__menu">
          <ol className="navigation__menu__items no-touch">
            <Link to="/" className="navigation__menu__link">
              <li className="navigation__menu__item">
                home
              </li>
            </Link>
            <Link to="/resource" className="navigation__menu__link">
              <li className="navigation__menu__item">
                resources
              </li>
            </Link>
            <Link to="/authentication" className="navigation__menu__link">
              <li className="navigation__menu__item">
                account
              </li>
            </Link>
            <Link to="/contact" className="navigation__menu__link">
              <li className="navigation__menu__item">
                contact
              </li>
            </Link>
          </ol>
        </div>
        <div className="navigation__toggle">
          <div className="navigation__icon__container">
            <Icon size="100%" style={{ display: 'inline' }} icon={menu} onMouseDown={this.onClick} className={menuClass} />
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  whiteBackground: PropTypes.bool,
};

Navigation.defaultProps = {
  whiteBackground: true,
};

export default Navigation;
