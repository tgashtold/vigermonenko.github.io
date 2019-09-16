import React from 'react';
import PropTypes from 'prop-types';

import GifEditingForm, { EDITING, UPLOAD } from './GifEditingForm';

import '../styles/input.css';

const EditingSection = ({
  gif,
  onSubmit,
  onGoBack,
  mode,
}) => (
  <section className="info-section">
    <GifEditingForm mode={mode} gif={gif} onSubmit={onSubmit} onGoBack={onGoBack} />
  </section>
);

EditingSection.defaultProps = {
  gif: {
    url: '',
    title: '',
  },
};

EditingSection.propTypes = {
  mode: PropTypes.oneOf([EDITING, UPLOAD]).isRequired,
  gif: PropTypes.shape({ }),

  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default EditingSection;
