import {
  GET_BOOKS_PENDING,
  ADD_BOOK_PENDING,
  REMOVE_BOOK_PENDING,
  GET_BOOKS_FAIL,
  ADD_BOOK_FAIL,
  REMOVE_BOOK_FAIL,
  GET_BOOKS_SUCCESS,
  ADD_BOOK_SUCCESS,
  REMOVE_BOOK_SUCCESS,
  TOGGLE_BOOK_MODAL,
  TOGGLE_REMOVE_BOOK_MODAL,
  TOGGLE_ADD_BOOK_MODAL
} from '../constants/bookTypes';
import {
  getBooks as fetchBooks,
  addBook as postBook,
  removeBook as deleteBook
} from '../api/book';

const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books
});

const getBooksFailure = (error) => ({
  type: GET_BOOKS_FAIL,
  payload: error
});

const addBookSuccess = () => ({
  type: ADD_BOOK_SUCCESS
});

const addBookFailure = (error) => ({
  type: ADD_BOOK_FAIL,
  payload: error
});

const removeBookSuccess = () => ({
  type: REMOVE_BOOK_SUCCESS
});

const removeBookFailure = (error) => ({
  type: REMOVE_BOOK_FAIL,
  payload: error
});

export const getBooks = () => (dispatch) => {
  dispatch({ type: GET_BOOKS_PENDING });
  return fetchBooks(
      data => dispatch(getBooksSuccess(data)),
          error => dispatch(getBooksFailure(error)),
  );
};

export const addBook = (title, url) => (dispatch) => {
  dispatch({ type: ADD_BOOK_PENDING });
  return postBook(
    title,
    url,
    () => {
      dispatch(addBookSuccess());
      dispatch(getBooks());
    },
    error => dispatch(addBookFailure(error)),
  );
};

export const removeBook = (bookId) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK_PENDING });
  return deleteBook(
    bookId,
    () => {
      dispatch(removeBookSuccess());
      dispatch(getBooks());
      },
        error => dispatch(removeBookFailure(error))
  );
};

export const toggleBookModal = () => ({ type: TOGGLE_BOOK_MODAL });
export const toggleAddBookModal = () => ({ type: TOGGLE_ADD_BOOK_MODAL });
export const toggleRemoveBookModal = () => ({ type: TOGGLE_REMOVE_BOOK_MODAL });
