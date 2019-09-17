import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import '../styles/resultSection.css';

const Navigation = ({ buttons }) => {
  const buttonComponents = [];

  buttons.forEach((button) => {
    buttonComponents.push(<Button buttonName={button.name} onClick={button.onClick} />);
  });

  return (
    <nav className="navigation-section">
      {buttonComponents}
    </nav>
  );
};

Navigation.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })).isRequired,
};

export default Navigation;
