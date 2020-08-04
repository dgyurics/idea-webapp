import { bookTypes as types } from '../constants';

const initialState = {
  showBookModal: false,
  showAddBookModal: false,
  showRemoveBookModal: false,
  showSuccessModal: false,
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

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SUCCESS_MODAL:
      return {
        ...state,
        showAddBookModal: false,
        showRemoveBookModal: false,
        showSuccessModal: true
      };
    case types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case types.GET_BOOKS_FAIL:
    case types.ADD_BOOK_FAIL:
      return {
        ...state,
        error: getError(action.payload)
      };
    case types.REMOVE_BOOK_FAIL:
      return {
        ...state,
        error: getError(action.payload, 'Book not found')
      };
    case types.ADD_BOOK_SUCCESS:
      return {
        ...state,
        showAddBookModal: false,
        showSuccessModal: true,
        error: initialState.error
      };
    case types.REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        showRemoveBookModal: false,
        showSuccessModal: true,
        error: initialState.error
      };
    case types.TOGGLE_BOOK_MODAL:
      return {
        ...state,
        showBookModal: !state.showBookModal,
        showAddBookModal: false,
        showRemoveBookModal: false,
        showSuccessModal: false,
        error: initialState.error
      };
    case types.TOGGLE_ADD_BOOK_MODAL:
      return {
        ...state,
        showAddBookModal: !state.showAddBookModal
      };
    case types.TOGGLE_REMOVE_BOOK_MODAL:
      return {
        ...state,
        showRemoveBookModal: !state.showRemoveBookModal
      };
    case types.GET_BOOKS_PENDING:
    case types.ADD_BOOK_PENDING:
    case types.REMOVE_BOOK_PENDING:
    default:
      return state;
  }
};

export default booksReducer;
