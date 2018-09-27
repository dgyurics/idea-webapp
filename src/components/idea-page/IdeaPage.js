import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './IdeaPage.css'
import Tile from './tile/tile.js'
import Modal from '../modal/Modal.js'
import { Link } from 'react-router-dom'
import Navigation from '../navigation/Navigation.js'
import { createIdea, getIdeas } from '../../actions/ideaActions.js'
import { connect } from 'react-redux'

class IdeaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      newIdeaTitle: '',
      newIdeaContent: ''
    }
    this.submitNewIdea = this.submitNewIdea.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getIdeas();
  }

  createIdeaBlocks() {
    let result = []
    let ideas = this.props.ideas;

    for (let i=0; i<ideas.length; i++) {
      const title = ideas[i].title;
      const author = ideas[i].author;
      const url = '/conversation/' + i;

      result.push(
        <Link to={url} key={i}>
          <Tile title={title} author={author} />
        </Link>
      )
    }

    /* This element is used as a "create new topic" button */
    if(result.length > 0)
      result.push(
        <div key="uniqueKey" className="idea__new" onClick={this.toggleModal}>
          <Tile custom={true}/>
        </div>);

    return result;
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitNewIdea(event) {
    event.preventDefault();
    this.props.createIdea(
      { title: this.state.newIdeaTitle,
        content: this.state.newIdeaContent});
    this.setState({modalOpen: false, newIdeaTitle: '', newIdeaContent: ''})
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  createIdeaModal() {
    return (
      <Modal toggle={this.state.modalOpen} onClose={this.toggleModal}>
        <form onSubmit={this.submitNewIdea} className="idea__group">
          <input
            type="text"
            name="newIdeaTitle"
            value={this.state.newIdeaTitle}
            onChange={this.handleChange}
            className="idea__group__input"
            placeholder="Header"/>
          <textarea
            name="newIdeaContent"
            placeholder="Content..."
            value={this.state.newIdeaContent}
            onChange={this.handleChange}
            className="idea__group__text__area"/>
          <input type="submit" name="submit" value="Submit" className="idea__group__submit"/>
        </form>
      </Modal>
    )
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className={styles.ideaMain}>
          { this.createIdeaBlocks() }
        </div>
          { this.createIdeaModal() }
      </div>
    )
  }
}

IdeaPage.propTypes = {
  createIdea: PropTypes.func.isRequired,
  getIdeas: PropTypes.func.isRequired,
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => ({
  ideas: state.idea.ideas
})

export default connect(mapStateToProps, {createIdea, getIdeas})(IdeaPage);
