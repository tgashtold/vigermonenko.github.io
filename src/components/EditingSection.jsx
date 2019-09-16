import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalImage from './GifOriginalImage';
import GifEditingForm from './GifEditingForm';

import '../styles/input.css';

const EditingSection = ({
  gif,
  onSubmit,
  onGoBack,
}) => (
  <section className="info-section">
    <GifOriginalImage image={{ url: gif.url, title: gif.title }} />
    <GifEditingForm onSubmit={onSubmit} onGoBack={onGoBack} />
  </section>
);

EditingSection.propTypes = {
  gif: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,

  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default EditingSection;
