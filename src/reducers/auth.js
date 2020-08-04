import {
  FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS, LOAD_LOCAL_JWT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  REFRESH_JWT_SUCCESS,
  REGISTRATION_FAIL,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
  TOGGLE_FORGOT_PASSWORD_MODAL,
  TOGGLE_HELP_MODAL,
  TOGGLE_REGISTRATION_MODAL,
  TOGGLE_RESET_CODE_MODAL,
  TOGGLE_SUCCESS_MODAL, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_SUCCESS,
  VALIDATE_RESET_CODE_FAIL, VALIDATE_RESET_CODE_PENDING,
  VALIDATE_RESET_CODE_SUCCESS
} from '../constants/authTypes';

const initState = {
  showHelpModal: false,
  showRegistrationModal: false,
  showForgotPasswordModal: false,
  showResetCodeModal: false,
  showNewPasswordModal: false,
  showSuccessModal: false,
  error: {}, // fixme do not re-use in multiple areas
  loggedIn: false,
  user: {
    id: null,
    resetCode: null,
    username: null,
    admin: false
  }
};

const getError = (error, msg404, msg400) => {
  const errorStatus = error?.response?.status;
  let errorMsg;
  if (errorStatus === 400 || errorStatus === 401 || errorStatus === 403) {
    errorMsg = msg400 || 'Invalid username or password';
  } else if (errorStatus === 404) {
    errorMsg = msg404 || 'Not Found';
  } else if (errorStatus === 409) {
    errorMsg = 'User with that name already exists';
  } else {
    errorMsg = 'Something went wrong';
  }
  return {
    msg: errorMsg,
    code: errorStatus
  };
};

const authReducer = (state = initState, action) => {
  const user = state.user;
  switch (action.type) {
    case FORGOT_PASSWORD_PENDING:
    case LOGIN_PENDING:
    case LOGOUT_PENDING:
    case REGISTRATION_PENDING:
      return {
        ...state,
        error: {},
      };
    case TOGGLE_HELP_MODAL:
      return {
        ...state,
        error: {},
        showRegistrationModal: false,
        showForgotPasswordModal: false,
        showResetCodeModal: false,
        showNewPasswordModal: false,
        showSuccessModal: false,
        showHelpModal: !state.showHelpModal
      };
    case TOGGLE_RESET_CODE_MODAL:
      user.userId = action.payload ? action.payload : user.userId;
      return {
        ...state,
        showResetCodeModal: !state.showResetCodeModal,
        user
      };
    case TOGGLE_FORGOT_PASSWORD_MODAL:
      return {
        ...state,
        showForgotPasswordModal: !state.showForgotPasswordModal
      };
    case TOGGLE_REGISTRATION_MODAL:
      return {
        ...state,
        showRegistrationModal: !state.showRegistrationModal
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        showForgotPasswordModal: false,
        showSuccessModal: true
      };
    case REFRESH_JWT_SUCCESS:
    case LOAD_LOCAL_JWT_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
      return {
        ...state,
        loggedIn: false,
        user: initState.user
      };
    case UPDATE_PASSWORD_FAIL:
    case FORGOT_PASSWORD_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loggedIn: false,
        error: getError(action.payload)
      };
    case VALIDATE_RESET_CODE_PENDING:
      user.resetCode = action.payload ? action.payload : user.resetCode;
      return {
        ...state,
        user
      };
    case VALIDATE_RESET_CODE_SUCCESS:
      return {
        ...state,
        showResetCodeModal: false,
        showNewPasswordModal: true
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        showNewPasswordModal: false,
        showSuccessModal: true
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        showRegistrationModal: false,
        showSuccessModal: true,
        loggedIn: true
      };
    case VALIDATE_RESET_CODE_FAIL:
      user.resetCode = null;
      return {
        ...state,
        error: getError(action.payload, null, 'Invalid reset code'),
        user
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        error: getError(action.payload)
      };
    case TOGGLE_SUCCESS_MODAL:
      return {
        ...state,
        error: {},
        showSuccessModal: !state.showSuccessModal
      };
    default:
      console.warn(`Unhandled action type ${action.type}`);
      return state;
  }
};

export default authReducer;
