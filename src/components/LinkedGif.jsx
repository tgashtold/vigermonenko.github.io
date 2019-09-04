import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MinifiedGif from './MinifiedGif';

const LinkedGif = ({ from, toGif, gifUrl }) => (
  <Link to={{ pathname: toGif, state: { from } }}>
    <MinifiedGif url={gifUrl} />
  </Link>
);

LinkedGif.propTypes = {
  from: PropTypes.string.isRequired,
  toGif: PropTypes.string.isRequired,
};

export default LinkedGif;
