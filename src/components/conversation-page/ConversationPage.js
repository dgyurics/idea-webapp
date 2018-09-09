import React, { Component } from 'react'
import Navigation from '../navigation/Navigation.js'
import TextArea from '../text-area/TextArea.js'
import PropTypes from 'prop-types'
import styles from './ConversationPage.css'
import { connect } from 'react-redux'
import { getConversation, createMessage, getConversationMetaData, clearConversation } from '../../actions/conversationActions.js'

class ConversationPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.props.clearConversation();
  }

  componentDidMount() {
    const { conversationId } = this.props.match.params;
    this.props.getConversationMetaData(conversationId);
    this.props.getConversation(conversationId);
  }

  onSubmit(content) {
    this.props.createMessage(123, content, 'john doe');
  }

  createConversation() {
    let result = []
    let conversation = this.props.conversation;

    for(let i=0; i<conversation.length; i++) {
      result.push(
        <div key={i} className={"conversation__message " + (i%2 === 0 ? 'conversation__message--left' : 'conversation__message--right')}>
          {conversation[i].message}
        </div>
      )
    }
    return result;
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className={styles.conversation__container}>
          <div className={styles.conversation__main}>
              <h1>{this.props.title}</h1>
              { this.createConversation() }
              <TextArea onSubmit={this.onSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

ConversationPage.propTypes = {
  getConversation: PropTypes.func.isRequired,
  getConversationMetaData: PropTypes.func.isRequired,
  clearConversation: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  conversation: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => ({
  conversation: state.conversation.conversation,
  title: state.conversation.title
})

export default connect(mapStateToProps,{
  clearConversation,
  createMessage,
  getConversation,
  getConversationMetaData
})(ConversationPage);
