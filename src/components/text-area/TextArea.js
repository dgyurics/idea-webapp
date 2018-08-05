import React, { Component, PropTypes } from 'react'
import styles from './TextArea.css'

class TextArea extends Component {
  constructor(state, props) {
    super(state, props);
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <textarea className="textarea" onChange={this.handleChange}>
      </textarea>
    )
  }
}

export default TextArea;
