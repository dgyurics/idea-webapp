import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './TextArea.css'

class TextArea extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value) {
      this.props.onSubmit(this.state.value);
      this.setState({value: '' });
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form className="textarea__container" onSubmit={this.handleSubmit}>
        <textarea className="textarea"
          value={this.state.value}
          onChange={this.handleChange}/>
        <input className="textarea__submit button" type="submit" value="Submit" />
      </form>
    )
  }
}

TextArea.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default TextArea;
