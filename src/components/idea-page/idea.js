import React, { Component, PropTypes } from 'react'
import Card from './tile/tile.js'
import { Link } from 'react-router-dom'
import Navigation from './navigation/navigation.js'
import styles from './idea.css'

class IdeaPage extends Component {
  constructor(state, props) {
    super(state, props);
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className={styles.ideaMain}>
          <Link to={'/conversation/0'}>
            <Card index={0} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
          </Link>
          <Link to={'/conversation/1'}>
            <Card index={1} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
          </Link>
          <Link to={'/conversation/2'}>
            <Card index={2} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
          </Link>
          <Link to={'/conversation/3'}>
            <Card index={3} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
          </Link>
          <Link to={'/conversation/4'}>
            <Card index={4} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
          </Link>
          <Link to={'/conversation/5'}>
            <Card index={5} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default IdeaPage;
