import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollContainer from 'react-indiana-drag-scroll';
import { getBooks , toggleBookModal } from '../../../actions/book';
import { Icon } from 'react-icons-kit';
import { settings } from 'react-icons-kit/feather/settings';
import { UserContext } from '../../context/UserContext';
import Admin from './admin/Admin';
import './Books.css';

const Books = ({ books, getBooks, toggleBookModal }) => {
  useEffect(() => {
    getBooks();
  }, []);

  const { isAdmin } = useContext(UserContext);
  const renderBooks = () => books.map(book => (
    <div className="book-container" key={book.id}>
      <img className="book" src={book.src} alt={book.alt} />
    </div>
  ));

  return (
    <div className="books-container">
      { isAdmin ? <Icon className="books-icon" onClick={() => toggleBookModal()} size="2rem" icon={settings} /> : null }
      <ScrollContainer className="books-container__main">
        { renderBooks() }
      </ScrollContainer>
      <Admin />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  toggleBookModal: () => dispatch(toggleBookModal())
});

const mapStateToProps = state => ({
  books: state.books
});

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  getBooks: PropTypes.func.isRequired,
  toggleBookModal: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);
