import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/resultSection.css';

const MinifiedGif = ({ url }) => (
  <div className="minified-gif-wrapper">
    <img className="minified-gif__img" src={url} alt="" />
  </div>
);

MinifiedGif.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MinifiedGif;
