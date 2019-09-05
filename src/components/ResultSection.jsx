/* eslint-disable react/prop-types */
import React from 'react';

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

export default ResultSection;
