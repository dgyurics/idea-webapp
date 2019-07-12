import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { menu, x } from 'react-icons-kit/feather';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import './Navigation.css';

class Navigation extends Component {
  state = {
    visible: false,
    modalOpen: false,
  };

  onClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  toggleModal = () => {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
  }

  render = () => {
    const { visible, modalOpen } = this.state;
    const { whiteBackground } = this.props;
    const navigationClass = visible ? 'navigation' : 'navigation navigation--hidden';
    const menuClass = whiteBackground ? 'navigation__menu-icon navigation__menu-icon--black' : 'navigation__menu-icon';
    return (
      <div className={navigationClass}>
        <div className="navigation__menu">
          <ol className="navigation__menu__items">
            <li className="navigation__menu__item">
              <Link to="/" className="navigation__menu__link">home</Link>
            </li>
            <li onClick={this.toggleModal} onKeyDown={this.toggleModal} className="navigation__menu__item">resources</li>
            <li className="navigation__menu__item">
              <Link to="/contact" className="navigation__menu__link">contact</Link>
            </li>
          </ol>
          <div className="navigation__icon__container">
            <Icon size="100%" style={{ display: 'inline' }} icon={x} onClick={this.onClick} className="navigation__close-icon" />
          </div>
        </div>
        <div className="navigation__toggle">
          <div className="navigation__icon__container">
            <Icon size="100%" style={{ display: 'inline' }} icon={menu} onClick={this.onClick} className={menuClass} />
          </div>
        </div>
        <Modal toggle={modalOpen} onClose={this.toggleModal}>
          <div className="no-touch">
            <span>coming soon</span>
          </div>
        </Modal>
      </div>
    );
  }
}

Navigation.defaultProps = {
  whiteBackground: true,
};

Navigation.propTypes = {
  whiteBackground: PropTypes.bool,
};

export default Navigation;
