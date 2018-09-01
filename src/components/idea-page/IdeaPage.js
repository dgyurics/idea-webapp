import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './IdeaPage.css'
import Tile from './tile/tile.js'
import { Link } from 'react-router-dom'
import Navigation from './navigation/Navigation.js'
import { getIdeas } from '../../actions/ideaActions.js'
import { connect } from 'react-redux'

class IdeaPage extends Component {
  constructor(props) {
    super(props);
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
    result.push(<Tile custom={true} key="uniqueKey"/>); // tile used to create new topic/idea
    return result;
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className={styles.ideaMain}>
          { this.createIdeaBlocks() }
        </div>
      </div>
    )
  }
}

IdeaPage.propTypes = {
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

export default connect(mapStateToProps, {getIdeas})(IdeaPage);
