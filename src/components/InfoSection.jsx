import React from 'react';
import PropTypes from 'prop-types';

import GifOriginal from './GifOriginal';
import LinkedButton from './LinkedButton';

import '../styles/infoSection.css';

const InfoSection = ({
  avatarUrl,
  author,
  gifOriginalUrl,
  previousPath,
  title,
  uploadDatetime,
}) => (
  <section className="info-section">
    <GifOriginal
      gifOriginalUrl={gifOriginalUrl}
      avatarUrl={avatarUrl}
      author={author}
      title={title}
      uploadDatetime={uploadDatetime}
    />
    <LinkedButton
      buttonName="Back"
      linkTo={previousPath}
    />
  </section>
);

InfoSection.propTypes = {
  gifOriginalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uploadDatetime: PropTypes.string.isRequired,
  previousPath: PropTypes.string.isRequired,
};

export default InfoSection;
