import React from 'react';
import PropTypes from 'prop-types';

import '../styles/input.css';

const TextInput = ({ valueRef, placeholderText }) => (
  <div className="edit-input-wrapper">
    <input
      ref={valueRef}
      type="text"
      placeholder={placeholderText}
      className="edit__input"
    />
  </div>

);

TextInput.defaultProps = {
  placeholderText: '',
};

TextInput.propTypes = {
  valueRef: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
  placeholderText: PropTypes.string,
};

export default TextInput;
