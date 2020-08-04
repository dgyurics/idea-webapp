import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { checkCircle } from 'react-icons-kit/feather/checkCircle';
import './Success.css';

/*
 * Dialog indicating everything went well
*/
const Success = (props) => {
  const { message } = props;
  return (
    <div>
      <div className="modal__success__icon">
        <Icon size="100%" icon={checkCircle} />
      </div>
      <div className="modal__message">{message}</div>
    </div>
  );
};

Success.propTypes = {
  message: PropTypes.string
};

Success.defaultProps = {
  message: 'Success'
};

export default Success;
