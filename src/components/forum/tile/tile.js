import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './tile.css'

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  getBackgroundColor(index) {
    index = index < 4 ? index : index % 4;
    switch(index) {
      case 0:
        return styles.woodVeneer;
      case 1:
        return styles.sandDollar;
      case 2:
        return styles.charcoal;
      case 3:
        return styles.orange;
      }
  }

  render() {
    let author = this.props.author;
    let title = this.props.title;
    let style = this.getBackgroundColor(this.props.index);

    return (
      <div className={styles.tile + ' ' + style}>
        <div className={styles.tile__container}>
          <h4 className={styles.tile__author}><b>{author}</b></h4>
          <p>{title}</p>
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
