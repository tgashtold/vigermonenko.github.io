import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import GifOriginal from './GifOriginal';
import Button from './Button';

import '../styles/infoSection.css';

const InfoSection = ({
  avatarUrl,
  author,
  gifOriginalUrl,
  prevPath,
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
    <Link to={prevPath}>
      <Button buttonName="Back" />
    </Link>
  </section>
);

InfoSection.defaultProps = {
  avatarUrl: '',
  author: 'unknown',
};

InfoSection.propTypes = {
  avatarUrl: PropTypes.string,
  author: PropTypes.string,
  gifOriginalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uploadDatetime: PropTypes.string.isRequired,
  prevPath: PropTypes.string.isRequired,
};

export default InfoSection;
