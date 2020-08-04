import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { settings } from 'react-icons-kit/feather/settings';
import ScrollContainer from 'react-indiana-drag-scroll';
import { getBooks, toggleBookModal } from '../../../actions/book';
import Admin from './admin/Admin';
import './Books.css';

const Books = ({ isAdmin, books, getBooks, toggleBookModal }) => {
  useEffect(() => {
    getBooks();
  }, []);

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
  books: state.books.books,
  isAdmin: state.auth.user.admin
});

Books.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  getBooks: PropTypes.func.isRequired,
  toggleBookModal: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);
