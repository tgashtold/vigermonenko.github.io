/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/infoSection.css';

const GifOriginal = ({ gif }) => (
  <div className="gif-info">
    <div>
      <img className="gif-original__img" src={gif.originalImageUrl} alt={gif.title} />
    </div>
    <ul>
      <li>
        Title: <span>{gif.title}</span>
      </li>
      <li>
        Upload datetime: <span>{gif.uploadDatetime}</span>
      </li>
      <li>
        Author: <span>{gif.author}</span>
        <img
          src={gif.authorAvatarUrl}
          alt="no avatar provided"
        />
      </li>
    </ul>
  </div>
);

GifOriginal.propTypes = {
  gif: PropTypes.shape({
    originalImageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uploadDatetime: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default GifOriginal;
