import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../../modal/Modal';
import Success from '../../modal/template/Success'
import Register from './Register';
import ForgotPassword from './ForgotPassword'
import {
  toggleHelpModal,
  toggleRegistrationModal,
  toggleForgotPassword
} from '../../../actions/auth';
import ResetCode from './ResetCode';
import ResetPassword from './ResetPassword';

const HelpModal = ({
  isVisibleModal,
  isVisibleRegistration,
  isVisibleForgotPassword,
  isVisibleResetCode,
  isVisibleNewPassword,
  isVisibleSuccess,
  toggle,
  toggleRegistrationModal,
  toggleForgotPassword
}) => {
  const showMenu =
    !isVisibleRegistration &&
    !isVisibleForgotPassword &&
    !isVisibleResetCode &&
    !isVisibleNewPassword &&
    !isVisibleSuccess;
  return (
    <Modal visible={isVisibleModal} onClose={() => toggle()}>
      <div className={showMenu ? '' : 'hidden'}>
        <button type="button" onClick={() => toggleRegistrationModal()} className="modal__button modal__button--top">Register</button>
        <button type="button" onClick={() => toggleForgotPassword()} className="modal__button">Forgot Password</button>
      </div>
      { isVisibleRegistration ? <Register /> : null }
      { isVisibleForgotPassword ? <ForgotPassword /> : null }
      { isVisibleResetCode ? <ResetCode /> : null }
      { isVisibleNewPassword ? <ResetPassword /> : null }
      { isVisibleSuccess ? <Success /> : null }
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  isVisibleModal: state.auth.showHelpModal,
  isVisibleRegistration: state.auth.showRegistrationModal,
  isVisibleForgotPassword: state.auth.showForgotPasswordModal,
  isVisibleResetCode: state.auth.showResetCodeModal,
  isVisibleNewPassword: state.auth.showNewPasswordModal,
  isVisibleSuccess: state.auth.showSuccessModal
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleHelpModal()),
  toggleRegistrationModal: () => dispatch(toggleRegistrationModal()),
  toggleForgotPassword: () => dispatch(toggleForgotPassword())
});

HelpModal.propTypes = {
  isVisibleModal: PropTypes.bool.isRequired,
  isVisibleRegistration: PropTypes.bool.isRequired,
  isVisibleForgotPassword: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleRegistrationModal: PropTypes.func.isRequired,
  toggleForgotPassword: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpModal);
