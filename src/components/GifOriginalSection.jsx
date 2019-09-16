import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalInfo from './GifOriginalInfo';
import GifOriginalImage from './GifOriginalImage';

const GifOriginalSection = ({ gif }) => (
  <div className="gif-info">
    <GifOriginalImage image={{ url: gif.url, title: gif.title }} />
    <GifOriginalInfo
      info={{
        title: gif.title,
        uploadDatetime: gif.uploadDatetime,
        author: gif.author,
        authorAvatarUrl: gif.authorAvatarUrl,
      }}
    />
  </div>
);

GifOriginalSection.propTypes = {
  gif: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uploadDatetime: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};


export default GifOriginalSection;
