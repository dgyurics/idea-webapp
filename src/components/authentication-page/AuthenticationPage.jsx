import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { info } from 'react-icons-kit/feather/info';
import NavBar from '../navigation/Navigation';
import { toggleHelpModal } from '../../actions/auth';
import Login from './login/Login';
import Help from './help/HelpModal';
import './AuthenticationPage.css';

const AuthenticationPage = ({ isLoggedIn, toggleModal, props }) => {
  const { match: { params: { userId } } } = props;

  useEffect(() => {
    if (userId) toggleModal(userId);
  }, [userId]);

  return (
    <div className="auth-page">
      <NavBar />
      <div className="auth__container">
        <div className="auth__login__container">
          <Login />
          <div className={isLoggedIn ? 'hidden' : 'auth__icon__container'}>
            <Icon size="100%" icon={info} onClick={() => toggleModal()} onKeyDown={() => toggleModal(true)} />
          </div>
        </div>
        <Help />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.auth.loggedIn,
  props
});

const mapDispatchToProps = dispatch => ({
  toggleModal: (userId) => dispatch(toggleHelpModal(userId))
});

AuthenticationPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }),
  toggleModal: PropTypes.func.isRequired
};

AuthenticationPage.defaultProps = {
  match: {
    params: null,
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationPage);
