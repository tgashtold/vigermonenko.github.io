/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/infoSection.css';

const GifOriginal = ({ gif }) => {
  const avatarImageRef = React.createRef();

  const onFailedToLoadAvatar = () => {
    avatarImageRef.current.style.display = 'none';
  };

  return (
    <div className="gif-info">
      <div>
        <img className="gif-original__img" src={gif.imageUrl} alt={gif.title} />
      </div>
      <ul>
        <li>
          Title: <span>{gif.title}</span>
        </li>
        <li>
          Upload datetime: <span>{gif.uploadDatetime}</span>
        </li>
        <li>
          Author: <span>{gif.author}</span> &nbsp;
        <img className="avatar"
            src={gif.authorAvatarUrl}
            alt="Author's avatar"
            ref={avatarImageRef}
            onError={onFailedToLoadAvatar}
          />
        </li>
      </ul>
    </div>
  );
};

GifOriginal.propTypes = {
  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uploadDatetime: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default GifOriginal;
