import React from 'react';
import PropTypes from 'prop-types';

import '../styles/input.css';


const TextInput = ({ placeholderText, onChange }) => {
  const onValueChange = (event) => {
    event.preventDefault();
    onChange(event.target.value);
  };

  return (
    <div className="edit-input-wrapper">
      <input
        type="text"
        placeholder={placeholderText}
        className="edit__input"
        onChange={onValueChange}
      />
    </div>
  );
};

TextInput.defaultProps = {
  placeholderText: '',
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
};

export default TextInput;
