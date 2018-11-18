import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { layers } from 'react-icons-kit/feather/layers'
import { user } from 'react-icons-kit/feather/user'
import { Link } from 'react-router-dom'
import Modal from '../../modal/Modal.js'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  render() {
    return (
      <div>
        <div className="home-page__header">
          <div className="home-page__header__item" onClick={this.toggleModal}>
            <Icon className="home-page__header__icon" size={'100%'} icon={layers}/>
          </div>
        </div>
        <Modal toggle={this.state.modalOpen} onClose={this.toggleModal}>
          <div className="coming-soon">January 1<sup>st</sup> 2019</div>
        </Modal>
      </div>
    )
  }
};

export default Header;
