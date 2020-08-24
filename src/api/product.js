import {
  getProducts as fetchProducts,
  addProduct as postProduct,
  removeProduct as deleteProduct,
  updateProduct as putProduct
} from '../util/httpClient';

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
