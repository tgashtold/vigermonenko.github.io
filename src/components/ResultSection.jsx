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

ResultSection.defaultProps = {
  gifs: [],
  from: '/',
};

ResultSection.propTypes = {
  gifs: PropTypes.array,
  from: PropTypes.string,
};

export default ResultSection;
