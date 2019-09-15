import React from 'react';
import PropTypes from 'prop-types';

import SectionNavigation from './SectionNavigation';
import GifEditingForm from './GifEditingForm';

import '../styles/input.css';

const EditingSection = ({ leftButton, rightButton }) => (
  <section className="info-section">
    <div className="gif-info">
      <img className="gif-original__img" src="" alt="" />
    </div>
    <GifEditingForm />
    <SectionNavigation leftButton={leftButton} rightButton={rightButton} />
  </section>
);

EditingSection.propTypes = {
  leftButton: PropTypes.shape({ }).isRequired,
  rightButton: PropTypes.shape({ }).isRequired,
};
