import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from './category/Category.js'
import Cube from './cube/Cube.js'
import './Tile.css'

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  defaultTile() {
    let style = {}
    style.backgroundImage = this.props.imgUrl ? 'url(' + this.props.imgUrl + ')' : null

    return (
      <div className="tile" style={style}>
        <div className="tile__container">
          <span className="tile__title">{this.props.title}</span>
          <span className="tile__author">{this.props.author}</span>
        </div>
      </div>
    )
  }

  customTile() {
    return (
      <div className="tile tile--no-border tile--no-hover">
        <Cube/>
      </div>
    )
  }

  render() {
    return (
      <span>
        { this.props.custom ? this.customTile() : this.defaultTile() }
      </span>
    )
  }
}

Tile.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  imgUrl: PropTypes.string,
  custom: PropTypes.bool
}

export default Tile;
