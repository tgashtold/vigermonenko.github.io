import React from 'react';
import PropTypes from 'prop-types';

import '../styles/infoSection.css';

const GifOriginalImage = ({ image }) => (
  <div>
    <img className="gif-original__img" src={image.url} alt={image.title} />
  </div>
);

GifOriginalImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default GifOriginalImage;
