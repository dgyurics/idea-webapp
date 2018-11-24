import React, { Component } from 'react'
import Modal from '../modal/Modal.js'
import { Icon } from 'react-icons-kit'
import { layers } from 'react-icons-kit/feather/layers'
import './HomePage.css'

class Home extends Component {
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
      <div className="home-container">
        <div className="home__header__icon__container" onClick={this.toggleModal}>
          <Icon className="home__header__icon" size={'100%'} icon={layers}/>
        </div>
        <h1 className="home-logo no-touch">
          A <span className="home-logo--lrg">life</span> well lived
        </h1>
        <div className="home-footer no-touch">
          <span>Dennis Gyurics</span>
        </div>
        <Modal toggle={this.state.modalOpen} onClose={this.toggleModal}>
          <div className="coming-soon">January 1<sup>st</sup> 2019</div>
        </Modal>
      </div>
    );
  }
}

export default Home;
