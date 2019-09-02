import React from 'react';
import PropTypes from 'prop-types';

import '../styles/buttons.css';

const Button = ({ buttonName, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={() => { }}
    className="button button_hover"
  >
    {buttonName}
  </div>
);

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
