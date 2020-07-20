import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../../../../actions/book';

const RemoveBook = ({ books, visible, removeBook, error }) => {
  const defaultState = { value: 'DEFAULT', errorMsg: '' };
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(defaultState);
  }, [visible, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    removeBook(state.value);
  };

  const handleChange = (e) => {
    setState({ ...state, value: e.target.value, errorMsg: '' });
  };

  const renderDropDown = () => books.map(book => (
    <option value={book.id} key={book.id}>{book.title}</option>
  ));

  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <select name="book" value={state.value} onChange={handleChange} className="modal__input modal__input--select">
          <option value="DEFAULT" disabled>select a book</option>
          { renderDropDown() }
        </select>
        <input type="submit" name="delete" value="Delete" className="modal__submit" disabled={state.value === 'DEFAULT'} />
      </form>
    </div>
  );
};

RemoveBook.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  visible: PropTypes.bool.isRequired,
  removeBook: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  visible: state.showRemoveBookModal,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  removeBook: (bookId) => dispatch(removeBook(bookId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveBook);
