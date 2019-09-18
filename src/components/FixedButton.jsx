import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import '../styles/input.css';

const FixedButton = ({ name, onClick }) => (
  <div className="box">
    <Button buttonName={name} onClick={onClick} />
  </div>
);

FixedButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FixedButton;
