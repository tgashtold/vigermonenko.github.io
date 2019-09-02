import React from 'react';
import PropTypes from 'prop-types';

import ResultContent from './ResultContent';
import Navigation from './Navigation';

import '../styles/resultSection.css';


const ResultSection = ({
  loadMore,
  gifs,
  from,
}) => (
  <section className="results-section">
    <ResultContent from={from} gifs={gifs} />
    <Navigation loadMore={loadMore} />
  </section>
);

ResultSection.defaultProps = {
  gifs: [],
  from: '/',
};

ResultSection.propTypes = {
  gifs: PropTypes.array,
  from: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
};

export default ResultSection;
