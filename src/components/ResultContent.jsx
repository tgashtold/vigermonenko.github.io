/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import LinkedGif from './LinkedGif';

import '../styles/resultSection.css';


const ResultContent = ({ gifs, from }) => (
  <section className="search-result-content">
    {
      gifs.map((gif) => (
        <LinkedGif
          key={gif.id}
          toGif={`/gif/${gif.id}`}
          from={from}
          gifUrl={gif.images.original.url}
          title={gif.title}
        />
      ))
  }
  </section>
);

ResultContent.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultContent;
