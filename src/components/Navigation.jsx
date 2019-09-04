import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

import '../styles/resultSection.css';

const Navigation = ({ toLoadMore }) => (
  <nav className="navigation-section">
    <Link to={toLoadMore} replace>
      <Button buttonName="More" />
    </Link>
    <Link to="/">
      <Button buttonName="Home" />
    </Link>
  </nav>
);

Navigation.propTypes = {
  toLoadMore: PropTypes.string.isRequired,
};

export default Navigation;
