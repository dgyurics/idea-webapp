import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../../../../actions/book';

const CreateBook = ({ addBook, error }) => {
  const initState = { title: '', src: '', errorMsg: '' };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(state.title, state.src);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="title" placeholder="book title" value={state.title} onChange={handleChange} className="modal__input" />
        <input type="text" name="src" placeholder="image url" value={state.src} onChange={handleChange} className="modal__input" />
        <input type="submit" name="create" value="Create" className="modal__submit" disabled={!state.title || !state.src} />
      </form>
    </div>
  );
};

CreateBook.propTypes = {
  addBook: PropTypes.func.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

const mapStateToProps = state => ({
  error: state.books.error
});

const mapDispatchToProps = dispatch => ({
  addBook: (title, src) => dispatch(addBook(title, src))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBook);
