import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MinifiedGif from './MinifiedGif';

import '../styles/resultSection.css';

const ResultContent = ({ gifs, from }) => {
  function convertGifsToComponents() {
    const components = [];
    gifs.forEach((gif) => {
      components.push(
        <Link
          to={{ pathname: `/gif/${gif.id}`, state: { from } }}
          key={gif.id}
        >
          <MinifiedGif
            id={gif.id}
            url={gif.images.original.url}
          />
        </Link>,
      );
    });
    return components;
  }

  return (
    <section className="search-result-content">
      {convertGifsToComponents()}
    </section>
  );
};

ResultContent.defaultTypes = {
  gifs: [],
  from: '/',
};

ResultContent.propTypes = {
  from: PropTypes.string,
  gifs: PropTypes.array,
};

export default ResultContent;
