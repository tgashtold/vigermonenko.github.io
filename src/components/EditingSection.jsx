import React from 'react';
import PropTypes from 'prop-types';

import GifEditingForm from './GifEditingForm';

import '../styles/input.css';

const EditingSection = ({
  gif,
  onSubmit,
  onGoBack,
}) => (
  <section className="info-section">
    <GifEditingForm gif={gif} onSubmit={onSubmit} onGoBack={onGoBack} />
  </section>
);

EditingSection.defaultProps = {
  gif: {
    url: '',
    title: '',
  },
};

EditingSection.propTypes = {
  gif: PropTypes.shape({ }),

  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default EditingSection;
