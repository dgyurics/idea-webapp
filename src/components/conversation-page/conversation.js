import React, { Component } from 'react'
import Navigation from '../idea-page/navigation/navigation.js'
import PropTypes from 'prop-types'
import styles from './conversation.css'

class ConversationPage extends Component {
  constructor(state, props) {
    super(state, props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    // TODO fetch conversation details here
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className={styles.conversation__container}>
          <div className={styles.conversation__main}>
            <h1>Bloop</h1>
            <div className="conversation__message conversation__message--left">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            </div>
            <div className="conversation__message conversation__message--right">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </div>
            <div className="conversation__message conversation__message--left">
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConversationPage;
