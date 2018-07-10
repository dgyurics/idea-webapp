import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './tile.css'

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
          <h4 className={styles.tile__author}>{author}</h4>
          <p>{title}</p>
        </div>
        <div className={styles.tile__icons}>
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
