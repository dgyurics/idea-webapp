import {
  GET_PRODUCTS_PENDING,
  ADD_PRODUCT_PENDING,
  REMOVE_PRODUCT_PENDING,
  GET_PRODUCTS_FAIL,
  ADD_PRODUCT_FAIL,
  REMOVE_PRODUCT_FAIL,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
  TOGGLE_PRODUCT_MODAL,
  TOGGLE_ADD_PRODUCT_MODAL,
  TOGGLE_PRODUCT_SELECTION, EDIT_PRODUCT_PENDING, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL
} from '../constants/productTypes';
import {
  getProducts as fetchProducts,
  addProduct as postProduct,
  removeProduct as deleteProduct,
} from '../api/product';

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAIL,
  payload: error
});

const addProductSuccess = () => ({
  type: ADD_PRODUCT_SUCCESS
});

const editProductSuccess = () => ({
  type: EDIT_PRODUCT_SUCCESS
});

const editProductFailure = () => ({
  type: EDIT_PRODUCT_FAIL
});

const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAIL,
  payload: error
});

const removeProductSuccess = () => ({
  type: REMOVE_PRODUCT_SUCCESS
});

const removeProductFailure = (error) => ({
  type: REMOVE_PRODUCT_FAIL,
  payload: error
});

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_PENDING });
  return fetchProducts(
      data => dispatch(getProductsSuccess(data)),
          error => dispatch(getProductsFailure(error)),
  );
};

export const addProduct = (product) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_PENDING });
  return postProduct(
    product,
    () => {
      dispatch(addProductSuccess());
      dispatch(getProducts());
    },
    error => dispatch(addProductFailure(error)),
  );
};

export const editProduct = (product, productId) => (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_PENDING });
  return postProduct(
    product,
    productId,
    () => {
      dispatch(editProductSuccess());
      dispatch(getProducts());
    },
    error => dispatch(editProductFailure(error)),
  );
};

export const removeProduct = (productId) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT_PENDING });
  return deleteProduct(
    productId,
    () => {
      dispatch(removeProductSuccess());
      dispatch(getProducts());
      },
        error => dispatch(removeProductFailure(error))
  );
};

export const toggleProductSelection = (idx) => ({
  type: TOGGLE_PRODUCT_SELECTION,
  payload: idx
});

export const toggleProductModal = () => ({ type: TOGGLE_PRODUCT_MODAL });
export const toggleAddProductModal = () => ({ type: TOGGLE_ADD_PRODUCT_MODAL });
