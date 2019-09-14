import React from 'react';
import PropTypes from 'prop-types';

import '../styles/buttons.css';


const Button = ({ buttonName, onClick }) => (
  <div
    className="button button_hover"
    role="button"
    onClick={onClick}
    onKeyUp={onClick}
    tabIndex={0}
  >
    {buttonName}
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
