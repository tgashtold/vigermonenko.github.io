import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/buttons.css';

const LinkedButton = ({ buttonName, linkTo, replace }) => (
  <Link to={linkTo} replace={replace}>
    <div className="button button_hover">
      {buttonName}
    </div>
  </Link>
);

LinkedButton.defaultProps = {
  replace: false,
};

LinkedButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  replace: PropTypes.bool,
};

export default LinkedButton;
