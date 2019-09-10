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
  from: PropTypes.string.isRequired,

  gifs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default ResultContent;
