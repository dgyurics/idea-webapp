import {
  getBooks as fetchBooks,
  addBook as postBook,
  removeBook as deleteBook
} from '../util/httpClient';

export const getBooks = (cbSuccess, cbFail) => {
  fetchBooks()
    .then(res => cbSuccess(res.data))
    .catch(error => cbFail(error));
};

export const addBook = (title, src, cbSuccess, cbFail) => {
  postBook({ title, src })
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};

export const removeBook = (bookId, cbSuccess, cbFail) => {
  deleteBook(bookId)
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};
