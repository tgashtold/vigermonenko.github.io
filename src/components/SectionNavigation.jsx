import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import '../styles/resultSection.css';

const Navigation = ({ leftButton, rightButton }) => (
  <nav className="navigation-section">
    <Button buttonName={leftButton.name} onClick={leftButton.onClick} />
    <Button buttonName={rightButton.name} onClick={rightButton.onClick} />
  </nav>
);

Navigation.propTypes = {
  leftButton: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,

  rightButton: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default Navigation;
