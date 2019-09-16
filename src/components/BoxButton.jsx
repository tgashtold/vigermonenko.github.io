import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import '../styles/input.css';

const BoxButton = ({ name, onClick }) => (
  <div className="box">
    <Button buttonName={name} onClick={onClick} />
  </div>
);

BoxButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BoxButton;
