import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from './category/Category.js'
import styles from './Tile.css'

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let author = this.props.author;
    let title = this.props.title;

    return (
      <div className={styles.tile}>
        <div className={styles.tile__container}>
          <span className={styles.tile__title}>{title}</span>
          <span className={styles.tile__author}>{author}</span>
        </div>
        <div className={styles.tile__icons}>
          <Category/>
          <Category/>
        </div>
      </div>
    )
  }
}

Tile.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Tile;
