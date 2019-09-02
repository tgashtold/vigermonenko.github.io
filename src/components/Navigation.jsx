import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

import '../styles/resultSection.css';

const Navigation = ({ loadMore }) => (
  <nav className="navigation-section">
    <Button onClick={loadMore} buttonName="More" />
    <Link to="/">
      <Button buttonName="Home" />
    </Link>
  </nav>
);

Navigation.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Navigation;
