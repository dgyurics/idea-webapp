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
    this.state = { modalOpen: false }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.getIdeas();
  }

  createIdeaBlocks() {
    let blocks = []

    this.props.ideas.forEach(idea => {
      blocks.push(
        <Link key={idea.id} to={'/conversation/' + idea.id}>
          <Tile title={idea.title} author={idea.author} imgUrl={idea.imgUrl}/>
        </Link>
      )
    })

    /* This element is used as a "create new topic" button */
    if(blocks.length > 0)
      blocks.push(
        <div key="newIdeaBlock" className="idea__new__button" onClick={this.toggleModal}>
          <Tile custom={true}/>
        </div>);

    return blocks;
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className={styles.ideaMain}>
          { this.createIdeaBlocks() }
        </div>
        <Modal toggle={this.state.modalOpen} onClose={this.toggleModal}>
          <div className="idea__new__modal">Coming soon</div>
        </Modal>
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
