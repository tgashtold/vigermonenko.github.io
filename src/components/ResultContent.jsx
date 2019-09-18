import React from 'react';
import PropTypes from 'prop-types';

import LinkedGif from './LinkedGif';
import { gifInfoPath } from '../services/webroot';

import '../styles/resultSection.css';


const ResultContent = ({ gifs, from }) => (
  <section className="search-result-content">
    {
      gifs.map((gif) => (
        <LinkedGif
          key={gif.id}
          toGif={gifInfoPath + gif.id}
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
