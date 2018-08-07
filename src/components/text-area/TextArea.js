import React, { Component, PropTypes } from 'react'
import styles from './TextArea.css'

class TextArea extends Component {
  constructor(state, props) {
    super(state, props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log('submit');
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="textarea__container">
        <textarea className="textarea" onChange={this.handleChange}>
        </textarea>
        <span className="textarea__submit" onClick={this.handleSubmit}>Submit</span>
      </div>
    )
  }
}

export default TextArea;
