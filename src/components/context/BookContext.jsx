import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getBooks as fetchBooks } from '../../util/httpClient';

export const BookContext = createContext({});

export const BookProvider = (props) => {
  const { children } = props;
  const [books, setBooks] = useState([]);
  const getBooks = () => fetchBooks().then(res => setBooks(res.data));

  useEffect(() => {
    getBooks();
  }, []);

  const bookContext = {
    books,
    getBooks,
  };

  return <BookContext.Provider value={bookContext}>{children}</BookContext.Provider>;
};

export const { Consumer } = BookContext;

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
