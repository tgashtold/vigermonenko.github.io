import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ThumbnailGif from './ThumbnailGif';


const LinkedGif = ({
  gifUrl,
  title,
  toGif,
  from,
}) => (
  <Link to={{ pathname: toGif, state: { from } }}>
    <ThumbnailGif title={title} url={gifUrl} />
  </Link>
);

LinkedGif.propTypes = {
  gifUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  toGif: PropTypes.string.isRequired,
};

export default LinkedGif;
