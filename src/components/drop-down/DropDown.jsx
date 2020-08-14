import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import PropTypes from 'prop-types';
import { moreHorizontal } from 'react-icons-kit/feather';
import './DropDown.css';

const DropDown = ({ actions }) => {
  const [visible, toggleVisibility] = useState(false);

  return (
    <div className="drop-down">
      <div className="drop-down__icon" onClick={() => toggleVisibility(!visible)}>
        <Icon className="edit-product-icon" icon={moreHorizontal} />
      </div>
      <div className={ visible ? 'drop-down__content' : 'drop-down__content-container drop-down__content-hidden'}>
        <ol className="drop-down__items">
          {
            actions.map((action, idx) =>
              <li key={idx} onClick={action.action} className="drop-down__item">
                {action.label}
              </li>)
          }
        </ol>
      </div>
    </div>
  )
};

DropDown.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func
    }).isRequired
  ).isRequired
};

export default DropDown;
