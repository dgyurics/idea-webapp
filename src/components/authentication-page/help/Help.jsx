import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../modal/Modal';
import SuccessForm from './success/Success';
import RegistrationForm from './register/Register';
import ResetCodeForm from './reset-code/ResetCode';
import ResetPasswordForm from './reset-password/ResetPassword';
import ForgotPasswordForm from './forgot-password/ForgotPassword';

/*
 * Dialog allowing users to register or reset their password
*/
const Help = (props) => {
  const { visible, userId, onClose } = props;
  const initState = {
    options: true,
    registration: false,
    forgotPassword: false,
    resetCode: {
      visible: false,
      code: '',
    },
    resetPassword: false,
    success: {
      visible: false,
      message: '',
    },
  };
  const [visibility, setVisibility] = useState(initState);

  useEffect(() => {
    if (userId) setVisibility({ ...visibility, options: false, resetCode: { visible: true, code: '' } });
  }, [userId]);

  const register = () => {
    setVisibility({ ...visibility, options: false, registration: true });
  };
  const updatePassword = () => {
    setVisibility({ ...visibility, options: false, forgotPassword: true });
  };
  const closeModal = () => {
    onClose();
    setVisibility(initState);
  };
  const MODAL_CLOSE_TIMER = 2500;
  const successCallback = (message = 'success') => {
    setVisibility({ ...initState, options: false, success: { visible: true, message } });
    setTimeout(() => closeModal(), MODAL_CLOSE_TIMER);
  };
  const successResetCodeCallback = (code, message = 'success') => {
    setVisibility({ ...initState, options: false, success: { visible: true, message } });
    setTimeout(() => setVisibility({ ...initState, options: false, resetPassword: true, resetCode: { visible: false, code } }), MODAL_CLOSE_TIMER);
  };
  const renderOptions = () => (
    <div className={visibility.options ? '' : 'hidden'}>
      <button type="button" onClick={register} className="auth__button auth__button--top">Register</button>
      <button type="button" onClick={updatePassword} className="auth__button">Forgot Password</button>
    </div>
  );
  return (
    <Modal visible={visible} onClose={closeModal}>
      { renderOptions() }
      <RegistrationForm visible={visibility.registration} successCb={successCallback} />
      <ForgotPasswordForm visible={visibility.forgotPassword} successCb={successCallback} />
      <ResetCodeForm visible={visibility.resetCode.visible} userId={userId} successCb={successResetCodeCallback} />
      <ResetPasswordForm visible={visibility.resetPassword} userId={userId} resetCode={visibility.resetCode.code} successCb={successCallback} />
      <SuccessForm visible={visibility.success.visible} message={visibility.success.message} />
    </Modal>
  );
};
Help.propTypes = {
  userId: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
Help.defaultProps = {
  userId: '',
  visible: false,
  onClose: () => {},
};
export default Help;
