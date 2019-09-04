import React from 'react';
import PropTypes from 'prop-types';

import * as backgroundImage from '../assets/background.jpg';
import '../styles/layouts.css';

const MainLayout = ({ children }) => (
  <div className="site-wrapper">
    <div className="background-wrapper">
      <img className="background__img" src={backgroundImage} alt="here should be a layout" />
    </div>
    <div className="sections">
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
