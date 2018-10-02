import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    event.preventDefault();
    if(e.target === e.currentTarget && this.props.onClose)
        this.props.onClose()
  }

  render() {
    const show = this.props.toggle
    return(
      <div onClick={this.handleClose} className={"modal__container " + (show ? "modal__container--visible" : "")}>
        <div className="modal__m">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onClose: PropTypes.func
}

export default Modal;
