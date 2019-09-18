import React from 'react';
import PropTypes from 'prop-types';

import GifUploadForm from './GifUploadForm';

import '../styles/input.css';


const UploadSection = ({
  onSubmit,
  onGoBack,
}) => (
  <section className="info-section">
    <GifUploadForm onSubmit={onSubmit} onGoBack={onGoBack} />
  </section>
);

UploadSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default UploadSection;
