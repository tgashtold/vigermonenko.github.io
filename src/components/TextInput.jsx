import React from 'react';
import PropTypes from 'prop-types';

import '../styles/input.css';

const TextInput = ({ ref, placeholderText }) => (
  <div className="edit-input-wrapper">
    <input
      ref={ref}
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
  ref: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
  placeholderText: PropTypes.string,
};

export default TextInput;
