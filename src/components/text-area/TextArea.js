import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './TextArea.css'

class TextArea extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = { value: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    if(this.state.value)
      this.props.onSubmit(this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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

TextArea.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default TextArea;
