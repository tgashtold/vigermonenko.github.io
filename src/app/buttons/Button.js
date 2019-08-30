import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

class Button extends React.Component{
  render() {
    return(
      <div onClick = {this.props.onclick} className = 'button button_hover'>
        { this.props.buttonName }
      </div>
    )
  }
}

Button.ropTypes = {
  onclick: PropTypes.func,
  buttonName: PropTypes.string,
}

export default Button;
