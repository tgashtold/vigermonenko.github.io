import React from 'react';
import PropTypes from 'prop-types';

import '../styles/resultSection.css';

const ThumbnailGif = ({ url, title }) => (
  <div className="minified-gif-wrapper">
    <img className="minified-gif__img" src={url} alt={title} />
  </div>
);

ThumbnailGif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ThumbnailGif;
