import { contactTypes as types } from '../constants';

const initState = {
  showForm: false,
  showSuccess: false,
  error: {}
};

const getError = (error) => {
  return {
    msg: 'Something went wrong',
    code: error?.response?.status
  };
};

const contactUsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return {
        ...state,
        showForm: !state.showForm
      };
    case types.CONTACT_US_SUCCESS:
      return {
        ...state,
        showForm: false,
        showSuccess: !state.showSuccess
      };
    case types.CONTACT_US_FAIL:
      return {
        ...state,
        error: getError(action.payload)
      };
    case types.CONTACT_US_PENDING:
    default:
      return state;
  }
};

export default contactUsReducer;
