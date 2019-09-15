import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalSection from './GifOriginalSection';
import Button from './Button';

import '../styles/infoSection.css';

const InfoSection = ({ gif, onClick }) => (
  <section className="info-section">
    <GifOriginalSection gif={gif} />
    <Button
      buttonName="back"
      onClick={onClick}
    />
  </section>
);

InfoSection.propTypes = {
  gif: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default InfoSection;
