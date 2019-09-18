import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalSection from './GifOriginalSection';
import Navigation from './Navigation';

import '../styles/infoSection.css';


const InfoSection = ({ gif, onGoBack, onGoEdit }) => (
  <section className="info-section">
    <GifOriginalSection gif={gif} />
    <Navigation buttons={[{ name: 'edit', onClick: onGoEdit }, { name: 'back', onClick: onGoBack }]} />
  </section>
);

InfoSection.propTypes = {
  gif: PropTypes.shape({}).isRequired,
  onGoBack: PropTypes.func.isRequired,
  onGoEdit: PropTypes.func.isRequired,
};

export default InfoSection;
