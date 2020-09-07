import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'react-icons-kit';
import PropTypes from 'prop-types';
import { moreHorizontal } from 'react-icons-kit/feather';
import './DropDown.css';

const DropDown = ({ actions }) => {
  const [visible, toggleVisibility] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      toggleVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => document.removeEventListener('click', handleClickOutside, false);
  });

  return (
    <div className="drop-down" ref={ref}>
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
