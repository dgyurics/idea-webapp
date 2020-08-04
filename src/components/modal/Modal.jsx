import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component {
  handleClose = (e) => {
    const { onClose } = this.props;
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  render() {
    const { children, visible } = this.props;
    // Do not render at all if !visible
    const modalVisible = visible ? 'modal__container modal__container--visible'
      : 'modal__container';
    return ReactDOM.createPortal(
      <div onClick={this.handleClose} onKeyDown={this.handleClose} className={modalVisible}>
        <div className="modal">
          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>,
      document.body,
    );
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
