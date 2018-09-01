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
    return (
      <div className="tile">
        <div className="tile__container">
          <span className="tile__title">{this.props.title}</span>
          <span className="tile__author">{this.props.author}</span>
        </div>
      </div>
    )
  }

  customTile() {
    return (
      <div className="tile tile--no-border">
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
  custom: PropTypes.bool
}

export default Tile;
