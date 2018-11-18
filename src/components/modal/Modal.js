import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import {x} from 'react-icons-kit/feather/x'
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.exit = this.exit.bind(this);
  }

  handleClose(e) {
    event.preventDefault();
    if(e.target === e.currentTarget && this.props.onClose)
        this.props.onClose()
  }

  // CLEANUP
  exit() {
    this.props.onClose();
  }

  render() {
    const show = this.props.toggle
    return(
      <div onClick={this.handleClose}
        className={"modal__container " + (show ? "modal__container--visible" : "")}>
        <div className="modal">
          <span className="modal__icon" onClick={this.exit}>
            <Icon icon={x}/>
          </span>
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
