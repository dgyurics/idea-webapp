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
    return visible ? ReactDOM.createPortal(
      <div onClick={this.handleClose} onKeyDown={this.handleClose} className="modal__container">
        <div className="modal">
          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>,
      document.body,
    ) : null
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
