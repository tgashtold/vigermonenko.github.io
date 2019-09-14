import React from 'react';
import PropTypes from 'prop-types';

import ResultContent from './ResultContent';
import SectionNavigation from './SectionNavigation';
import '../styles/resultSection.css';


const ResultSection = ({
  gifs,
  from,
  leftButton,
  rightButton,
}) => (
  <section className="results-section">
    <ResultContent from={from} gifs={gifs} />
    <SectionNavigation leftButton={leftButton} rightButton={rightButton} />
  </section>
);

ResultSection.propTypes = {
  from: PropTypes.string.isRequired,
  gifs: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,

  leftButton: PropTypes.shape({ }).isRequired,
  rightButton: PropTypes.shape({ }).isRequired,
};

export default ResultSection;
