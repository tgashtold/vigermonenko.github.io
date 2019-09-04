import React from 'react';
import PropTypes from 'prop-types';

import '../styles/infoSection.css';

const GifOriginal = ({
  avatarUrl,
  author,
  gifOriginalUrl,
  title,
  uploadDatetime,
}) => (
    <div className="gif-info">
      <div>
        <img className="gif-original__img" src={gifOriginalUrl} alt={title} />
      </div>
      <ul>
        <li>
          Title: <span>{title}</span>
        </li>
        <li>
          Upload datetime: <span>{uploadDatetime}</span>
        </li>
        <li>
          Author: <span>{author}</span>
          <img
            src={avatarUrl}
            alt="no avatar provided"
          />
        </li>
      </ul>
    </div>
);

GifOriginal.defaultProps = {
  author: 'unknown',
  avatarUrl: '',
};

GifOriginal.propTypes = {
  gifOriginalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uploadDatetime: PropTypes.string.isRequired,
  author: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default GifOriginal;
