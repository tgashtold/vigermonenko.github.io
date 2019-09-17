import React from 'react';
import PropTypes from 'prop-types';

import '../styles/buttons.css';


const Button = ({ buttonName, onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    <span>
      {buttonName}
    </span>
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
