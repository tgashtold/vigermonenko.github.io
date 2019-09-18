import React from 'react';
import PropTypes from 'prop-types';

import ResultContent from './ResultContent';
import Navigation from './Navigation';
import '../styles/resultSection.css';


const ResultSection = ({
  gifs,
  from,
  buttons,
}) => (
  <section className="results-section">
    <ResultContent from={from} gifs={gifs} />
    <Navigation buttons={buttons} />
  </section>
);

ResultSection.propTypes = {
  from: PropTypes.string.isRequired,
  gifs: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,

  buttons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ResultSection;
