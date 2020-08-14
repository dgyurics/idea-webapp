import {
  getBooks as fetchBooks,
  getProducts as fetchProducts,
  addProduct as postProduct,
  removeProduct as deleteProduct,
  updateProduct as putProduct,
  addBook as postBook,
  removeBook as deleteBook
} from '../util/httpClient';

export const getBooks = (cbSuccess, cbFail) => {
  fetchBooks()
    .then(res => cbSuccess(res.data))
    .catch(error => cbFail(error));
};

export const getProducts = (cbSuccess, cbFail) => {
  fetchProducts()
    .then(res => cbSuccess(res.data))
    .catch(error => cbFail(error));
};

export const addProduct = (product, cbSuccess, cbFail) => {
  postProduct(product)
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};

export const updateProduct = (product, productId, cbSuccess, cbFail) => {
  putProduct(product, productId)
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};

export const removeProduct = (productId, cbSuccess, cbFail) => {
  deleteProduct(productId)
    .then(() => cbSuccess())
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
