import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../../../context/BookContext';
import { removeBook } from '../../../../../util/httpClient';

const RemoveBook = (props) => {
  const { visible, successCb } = props;
  const { books } = useContext(BookContext);
  const [bookId, setBookId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    removeBook(bookId)
    .then(() => {
      successCb();
      setErrorMsg('');
      setBookId('');
    })
    .catch((error) => {
      const code = error.response ? error.response.status : 500;
      if (code === 401) setErrorMsg('Unauthorized');
      else if (code === 404) setErrorMsg('Book not found');
      else setErrorMsg('Something went wrong');
    });
  };
  const handleChange = (e) => {
    setErrorMsg('');
    setBookId(e.target.value);
  };
  const renderDropDown = () => books.map(book => (
    <option value={book.id} key={book.id}>{book.title}</option>
  ));

  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="modal__error">{errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <select defaultValue="" onChange={handleChange} className="modal__input modal__input--select">
          <option value="" disabled>select a book</option>
          { renderDropDown() }
        </select>
        <input type="submit" name="delete" value="Delete" className="modal__submit" disabled={!bookId} />
      </form>
    </div>
  );
};

RemoveBook.propTypes = {
  visible: PropTypes.bool.isRequired,
  successCb: PropTypes.func.isRequired,
};

export default RemoveBook;
