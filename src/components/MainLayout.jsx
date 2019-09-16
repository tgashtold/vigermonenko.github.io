import React from 'react';
import PropTypes from 'prop-types';

import '../styles/layouts.css';

const MainLayout = ({ children }) => (
  <div className="site-wrapper">
    <div className="sections">
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
