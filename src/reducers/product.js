import { productTypes as types } from '../constants';

const initialState = {
  showAddProductModal: false,
  showEditProductModal: false,
  editProductIndex: -1,
  showSuccessModal: false,
  selectedProductIndex: -1, // a value of 0 or greater indicates a product has been selected
  error: {},
  products: []
};

const getError = (error, msg404) => {
  const errorStatus = error?.response?.status;
  let errorMsg;
  if (errorStatus === 401 || errorStatus === 403) {
    errorMsg = 'Unauthorized';
  } else if (errorStatus === 404) {
    errorMsg = msg404 || 'Not Found';
  } else {
    errorMsg = 'Something went wrong';
  }
  return {
    msg: errorMsg,
    code: errorStatus
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SUCCESS_MODAL:
      return {
        ...state,
        showAddProductModal: false,
        showEditProductModal: false,
        showSuccessModal: !state.showSuccessModal
      };
    case types.TOGGLE_PRODUCT_SELECTION:
      return {
        ...state,
        selectedProductIndex: action.payload >= 0 ? action.payload : -1
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case types.EDIT_PRODUCT_FAIL:
    case types.GET_PRODUCTS_FAIL:
    case types.ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: getError(action.payload)
      };
    case types.REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        error: getError(action.payload, 'Product not found')
      };
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        showEditProductModal: false,
        showSuccessModal: true,
        editProductIndex: -1,
        error: initialState.error
      };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        showAddProductModal: false,
        showSuccessModal: true,
        error: initialState.error
      };
    case types.TOGGLE_EDIT_PRODUCT_MODAL:
      return {
        ...state,
        editProductIndex: action.payload,
        showEditProductModal: !state.showEditProductModal
      };
    case types.TOGGLE_ADD_PRODUCT_MODAL:
      return {
        ...state,
        showAddProductModal: !state.showAddProductModal
      };
    case types.GET_PRODUCTS_PENDING:
    case types.ADD_PRODUCT_PENDING:
    case types.REMOVE_PRODUCT_PENDING:
    default:
      return state;
  }
};

export default productReducer;
