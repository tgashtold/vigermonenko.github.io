import React from 'react';
import PropTypes from 'prop-types';

import '../styles/resultSection.css';

const MinifiedGif = ({ url, title }) => (
  <div className="minified-gif-wrapper">
    <img className="minified-gif__img" src={url} alt={title} />
  </div>
);

MinifiedGif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MinifiedGif;
