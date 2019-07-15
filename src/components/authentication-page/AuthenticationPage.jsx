import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { info } from 'react-icons-kit/feather/info';
import { UserContext } from '../context/Context';
import NavBar from '../navigation/Navigation';
import Login from './login/Login';
import Help from './help/Help';
import './AuthenticationPage.css';

const Authentication = (props) => {
  const { isLoggedIn } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const { match: { params: { userId } } } = props;

  useEffect(() => {
    if (userId) setShowModal(true);
  }, [userId]);

  return (
    <div className="auth-page">
      <NavBar />
      <div className="auth__container">
        <div className="auth__login__container">
          <Login />
          <div className={isLoggedIn ? 'hidden' : 'auth__icon__container'}>
            <Icon size="100%" icon={info} onClick={() => setShowModal(true)} onKeyDown={() => setShowModal(true)} />
          </div>
        </div>
        <Help visible={showModal} onClose={() => setShowModal(false)} userId={userId} />
      </div>
    </div>
  );
};

Authentication.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }),
};

Authentication.defaultProps = {
  match: {
    params: null,
  },
};

export default Authentication;
