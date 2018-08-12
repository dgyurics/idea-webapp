import React, { Component } from 'react'
import Navigation from '../idea-page/navigation/Navigation.js'
import TextArea from '../text-area/TextArea.js'
import PropTypes from 'prop-types'
import styles from './ConversationPage.css'
import { connect } from 'react-redux'
import { getConversation } from '../../actions/conversationActions.js'
import { getIdeaMetaData } from '../../actions/ideaActions.js'

class ConversationPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { conversationId } = this.props.match.params;
    this.props.getIdeaMetaData(conversationId);
    this.props.getConversation(conversationId);
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
              <TextArea/>
          </div>
        </div>
      </div>
    )
  }
}

ConversationPage.propTypes = {
  getConversation: PropTypes.func.isRequired,
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
  title: state.idea.title
})

export default connect(mapStateToProps,{getConversation, getIdeaMetaData})(ConversationPage);
