/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import GifOriginal from './GifOriginal';
import LinkedButton from './LinkedButton';

import '../styles/infoSection.css';

const InfoSection = ({ gif, previousPath }) => (
  <section className="info-section">
    <GifOriginal gif={gif} />
    <LinkedButton
      buttonName="Back"
      linkTo={previousPath}
    />
  </section>
);

InfoSection.propTypes = {
  previousPath: PropTypes.string.isRequired,
};

export default InfoSection;
