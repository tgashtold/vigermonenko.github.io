/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MinifiedGif from './MinifiedGif';

const LinkedGif = ({
  gifUrl,
  title,
  toGif,
  from,
}) => (
  <Link to={{ pathname: toGif, state: { from } }}>
    <MinifiedGif title={title} url={gifUrl} />
  </Link>
);

LinkedGif.propTypes = {
  from: PropTypes.string.isRequired,
  toGif: PropTypes.string.isRequired,
};

export default LinkedGif;
