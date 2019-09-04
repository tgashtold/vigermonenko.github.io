import React from 'react';
import PropTypes from 'prop-types';

import LinkedButton from './LinkedButton';

import '../styles/resultSection.css';

const Navigation = ({ toLoadMore }) => (
  <nav className="navigation-section">
    <LinkedButton buttonName="More" linkTo={toLoadMore} replace />
    <LinkedButton buttonName="Home" linkTo="/" />
  </nav>
);

Navigation.propTypes = {
  toLoadMore: PropTypes.string.isRequired,
};

export default Navigation;
