import React, { Component, PropTypes } from 'react'
import Card from './tile/tile.js'
import styles from './forum.css'

class ForumPage extends Component {
  constructor(state, props) {
    super(state, props);
  }

  render() {
    return (
      <div className={styles.forumMain}>
        <Card index={0} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
        <Card index={1} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
        <Card index={2} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
        <Card index={3} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
        <Card index={4} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
        <Card index={5} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
        <Card index={6} title={'Architecture & Engineering'} author={'Dennis Gyurics'}/>
      </div>
    )
  }
}

export default ForumPage;
