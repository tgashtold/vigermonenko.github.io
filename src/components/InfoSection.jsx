import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalSection from './GifOriginalSection';
import Navigation from './SectionNavigation';

import '../styles/infoSection.css';


const InfoSection = ({ gif, onGoBack, onGoEdit }) => (
  <section className="info-section">
    <GifOriginalSection gif={gif} />
    <Navigation
      leftButton={{ name: 'edit', onClick: onGoEdit }}
      rightButton={{ name: 'back', onClick: onGoBack }}
    />
  </section>
);

InfoSection.propTypes = {
  gif: PropTypes.shape({}).isRequired,
  onGoBack: PropTypes.func.isRequired,
  onGoEdit: PropTypes.func.isRequired,
};

export default InfoSection;
