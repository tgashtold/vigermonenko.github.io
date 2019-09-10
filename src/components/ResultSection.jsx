import React from 'react';
import PropTypes from 'prop-types';

import ResultContent from './ResultContent';
import Navigation from './Navigation';

import '../styles/resultSection.css';


const ResultSection = ({
  toLoadMore,
  gifs,
  from,
}) => (
  <section className="results-section">
    <ResultContent from={from} gifs={gifs} />
    <Navigation toLoadMore={toLoadMore} />
  </section>
);

ResultSection.propTypes = {
  toLoadMore: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,

  gifs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default ResultSection;
