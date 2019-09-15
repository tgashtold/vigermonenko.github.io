import React from 'react';
import PropTypes from 'prop-types';

import '../styles/infoSection.css';

const GifOriginalInfo = ({ info }) => {
  const avatarImageRef = React.createRef();

  const onFailedToLoadAvatar = () => {
    avatarImageRef.current.style.display = 'none';
  };

  return (
    <div className="gif-info">
      <ul>
        <li>
          Title:
          &nbsp;
          <span>{info.title}</span>
        </li>
        <li>
          Upload datetime:
          &nbsp;
          <span>{info.uploadDatetime}</span>
        </li>
        <li>
          Author:
          &nbsp;
          <span>{info.author}</span>
          &nbsp;
          <img
            ref={avatarImageRef}
            className="avatar"
            src={info.authorAvatarUrl}
            alt="Author's avatar"
            onError={onFailedToLoadAvatar}
          />
        </li>
      </ul>
    </div>
  );
};

GifOriginalInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    uploadDatetime: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default GifOriginalInfo;
