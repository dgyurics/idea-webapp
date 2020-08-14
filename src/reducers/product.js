import { productTypes as types } from '../constants';

const initialState = {
  showBookModal: false,
  showAddBookModal: false,
  showSuccessModal: false,
  selectedBookIndex: -1, // a value of 0 or greater indicates a book has been selected
  error: {},
  books: []
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
        showAddBookModal: false,
        showSuccessModal: true
      };
    case types.TOGGLE_PRODUCT_SELECTION:
      return {
        ...state,
        selectedBookIndex: action.payload >= 0 ? action.payload : -1
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case types.GET_PRODUCTS_FAIL:
    case types.ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: getError(action.payload)
      };
    case types.REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        error: getError(action.payload, 'Book not found')
      };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        showAddBookModal: false,
        showSuccessModal: true,
        error: initialState.error
      };
    case types.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        showSuccessModal: true,
        error: initialState.error
      };
    case types.TOGGLE_PRODUCT_MODAL:
      return {
        ...state,
        showBookModal: !state.showBookModal,
        showAddBookModal: false,
        showSuccessModal: false,
        error: initialState.error
      };
    case types.TOGGLE_ADD_PRODUCT_MODAL:
      return {
        ...state,
        showAddBookModal: !state.showAddBookModal
      };
    case types.GET_PRODUCTS_PENDING:
    case types.ADD_PRODUCT_PENDING:
    case types.REMOVE_PRODUCT_PENDING:
    default:
      return state;
  }
};

export default productReducer;
